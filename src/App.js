import React, { Component } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom'
import Footer from './Footer'
import Spinner from './Spinner'
import Toolbar from './Header/Toolbar'

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data:[],
      isSummary:false
    }
  }

  componentDidMount(){
    axios.get('https://my-json-server.typicode.com/nitinbrains/demo/phones')
    .then((res)=> {
      this.setState({
        data:res.data
    })
      console.log("resp", this.state.data)    
    })
    .catch((err)=> {
      console.log(err);
    });
  }

  summary=()=>{
    this.setState({ isSummary:true })
  }


  render() {
    console.log("summ", this.state.isSummary)
    if(this.state.data.length===0){
      return <Spinner/>;
    }else{
    return (
      <div >
        <Toolbar/>
        <div className="container" >
        <div className="row">      
       { this.state.data.map((v, i)=>{
         return (
           <div key={i} className="col-md-4" style={{marginBottom: '2rem', textAlign:'center', border: '1px solid #E0E0E0'}}>
             <img src={v.thumbnailUrl} alt="thmnail" style={{width: '30%', marginTop:'2rem' }}></img>
               <div><h4>{v.title}</h4></div>
               <div><span style={{ color:'#0000ff', fontWeight:'bolder' }}><h4>Price: &#8377;{v.price}</h4></span></div>
            <Link to={`summary/${v.id}`}>  <button onClick={this.summary}
              style={{ backgroundColor:'#ff0000',
               color:'#ffffff', marginBottom:'10%',
                borderRadius:'10px', paddingTop:'3%', paddingLeft:'5%', paddingRight:'5%',paddingBottom:'3%' }}>
              Buy Now
              </button> </Link>
           
           </div>
         )
       }) }
        </div>
      </div>
      <Footer/>
      </div>
    );
      }
}
}

export default App;
