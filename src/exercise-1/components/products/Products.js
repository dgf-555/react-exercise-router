import React, {Component} from 'react';
import { BrowserRouter, Switch, Route, Link} from 'react-router-dom';
import Bicycle from './Bicycle';
import TV from './TV';
import Pencil from './Pencil';
import './Products.css';
import '../home/Home'
import Home from '../home/Home';

class Products extends Component {
  render() {
    return (
      <BrowserRouter>
          <div className="Products">
              All Products:
            <ul >
              <li>
                <Link className="link" to='/products/1'>Bicycle</Link>
              </li>
              <li>
                <Link className="link" to='/products/2'>TV</Link>
              </li>
              <li>
                <Link className="link" to='/products/3'>Pencil</Link>
              </li>
            </ul>
            
            <Switch>
              <Route exact path='/prodcuts' component={Products}></Route>
              <Route path='/products/1' component={Bicycle}></Route>
              <Route path='/products/2' component={TV}></Route>
              <Route path='/products/3' component={Pencil}></Route>
            </Switch>
  
  </div></BrowserRouter>
  
    );
  }
}
export default Products;
