import React from 'react';
import {Products,Navbar,ProductDetails} from './components'
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";


function App() {
  return (
    <div >
      <Router>
        <Navbar/>
        {/*<Switch>
       
                  <Route exact path="/" component={Products} />    
                    <Route exact path="/product/:id" component={ProductDetails} />
        </Switch>*/}
        <Products/>
      </Router>
    </div>
  );
}

export default App;
