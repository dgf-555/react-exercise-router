import React, {Component} from 'react';
import {Link} from 'react-router-dom';
class Aboutus extends Component {
    render(){
        return(
            <div>
                <p>
                Company:ThoughtWorks Local
                <br />
                Location:Xi'an
                <br />

                for more information,please
                <br />
                view our <Link to='/'>website</Link>
                </p>
            </div>
        );
    }
}
export default Aboutus;