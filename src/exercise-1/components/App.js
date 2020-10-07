import React, {Component} from 'react';
import { BrowserRouter, Switch, Route, Link} from 'react-router-dom';
import Home from './home/Home';
import Myprofile from './myprofile/Myprofile'
import Aboutus from './aboutus/Aboutus'
import '../styles/App.css';

class App extends Component {
  render() {
    return (
      <BrowserRouter>
          <div className="App">
            <ul className='menu'>
              <li>
                <Link className="link" to='/'>Home</Link>
              </li>
              <li>
                <Link className="link" to='/my-profile'>My Profile</Link>
              </li>
              <li>
                <Link className="link" to='/about-us'>About Us</Link>
              </li>
            </ul>
            
            <Switch>
              <Route exact path='/' component={Home}></Route>
              <Route path='/my-profile' component={Myprofile}></Route>
              <Route path='/about-us' component={Aboutus}></Route>
            </Switch>
  
  </div></BrowserRouter>
  
    );
  }
}

export default App;
