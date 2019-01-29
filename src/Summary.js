import React, { Component } from 'react'
import axios from 'axios'
import './Summary.css';
import Spinner from './Spinner'
import Footer from './Footer'

 class Summary extends Component {
  constructor(props) {
    super(props);
    this.state = {
      indData:[],
      quantity: 1,
      discount:false
    }
  }

  componentDidMount(){
    axios.get(`https://my-json-server.typicode.com/nitinbrains/demo/phones/${this.props.match.params.id}`)
    .then((res)=> {
      this.setState({
        indData:res.data
    })
      console.log("resp", this.state.indData)    
    })
    .catch((err)=> {
      console.log(err);
    });
  }

  increment=()=>{
    this.setState({ quantity:this.state.quantity + 1 })
  }

  decrement=()=>{
    if(this.state.quantity===1){
      return;
    }else{
      this.setState({ quantity:this.state.quantity - 1 })
    }
  }

  handleDiscount=(e)=>{
    e.preventDefault();
    let couponCode= e.target.elements.coupon.value;
    if(couponCode==="DIWALI"){
      this.setState({discount:true})
    }
  }

  render() {
    console.log("uhu",this.state.indData)
   if(this.state.indData.length===0){
     return <Spinner/>;
   }else{
    return (
      <div>
      <div className="container">
      <div className="outer">
        <div className="wrapper">
    <div>
    <img  src={this.state.indData.thumbnailUrl} alt="thmnail" style={{width: '40%', marginLeft:'15rem' }}></img> 
    <h4 style={{ textAlign:'center', marginTop:'25px' }} ><span style={{ fontWeight:'bolder'}}>{this.state.indData.title}</span></h4>
    </div>

    <div>
   <span style={{ fontWeight:'bolder' }}> Description:</span> {this.state.indData.description}.
   
   {this.state.discount===false ? <span style={{ color:'#0000ff', fontWeight:'bolder', textAlign:'center' }}><h2>Price: &#8377;{this.state.indData.price}</h2></span>:<span style={{ color:'#0000ff', fontWeight:'bolder', textAlign:'center' }}><h2>Price: &#8377;{this.state.indData.price - 500}<p style={{color:'#FF8C00'}}>(After Discount)</p></h2></span>}
   <h2 style={{ color:'#ff0000', textAlign:'center'}} >Quantity : <button onClick={this.increment}>+</button> {this.state.quantity} <button onClick={this.decrement}>-</button></h2>
   {this.state.discount===false ? <span style={{ color:'#0000ff', fontWeight:'bolder', textAlign:'center' }}><h2>Total Price: &#8377; {this.state.indData.price * this.state.quantity}</h2></span>:<span style={{ color:'#0000ff', fontWeight:'bolder', textAlign:'center' }}><h2>Total Price: &#8377; {(this.state.indData.price-500) * this.state.quantity}</h2></span>}
   <p style={{ color:'#0000ff', textAlign:'center' }}>Diwali offer &#8377; 500 off on all Smartphones - Coupon Code : DIWALI</p>
   <form onSubmit={this.handleDiscount}>
    <div style={{ textAlign:'center'}}><input style={{ textAlign:'center'}} type="text"  name="coupon" placeholder="Coupon Code..." /></div>
   <br/>
    <button className="buttonMy">Avail Discount</button>
    </form>
    <br/>
    <p style={{textAlign:'center', fontWeight:'bold'}}>Ok Tested 100% Pure Virgin & Smart!!</p>
    <br/>
    <div className="wrappero">
    <div><button className="flowButton">Go Back</button></div>
    <div><button className="flowButton">Continue</button></div>
    </div>

    </div>
  </div>
  </div>
  </div>
  <Footer/>
      </div>
     )
    }
  }
}

export default Summary;