import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import Summary from './Summary';
import { BrowserRouter as Router, Route } from 'react-router-dom'

var MainApp = (
<Router>
    <div>
    <Route exact path="/" component={App}/>
    <Route exact path="/summary/:id" component={Summary}/>
    </div>
</Router>

)

ReactDOM.render( MainApp, document.getElementById('root'));
registerServiceWorker();
