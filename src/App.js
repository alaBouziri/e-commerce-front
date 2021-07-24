import React from 'react';
import {Products,Navbar,ProductDetails,Cart} from './components'
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";


function App() {
  return (
    <div >
      <Router>
        <Navbar/>
       <Switch>
       
                    <Route exact path="/" component={Products} />    
                    <Route exact path="/product/:id" component={ProductDetails} />
                    <Route exact path="/cart/:id" component={Cart} />    

        </Switch>
      </Router>
    </div>
  );
}

export default App;
 