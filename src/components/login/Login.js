import React, {Component} from 'react';
import LoginForm from './LoginForm';

class Login extends Component {
    render() {
        return (
            <div className="row">
                <div className="col-md-4 md-offset-4">
                    <LoginForm/>
                </div>
            </div>
        );
    }
}

export default Login;