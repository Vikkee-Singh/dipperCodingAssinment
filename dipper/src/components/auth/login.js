import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { connect } from 'react-redux';
import FacebookLogin from 'react-facebook-login';
import cookie from 'react-cookie';
import { CLIENT_ROOT_URL, loginWithFacebook } from '../../actions/index';

class Login extends Component {
  constructor(props){
    super(props)
    this.state = { redirect: false}
    if (cookie.load('token')) { window.location.href = `${CLIENT_ROOT_URL}/dashboard` }
  }

  render() {
    const responseFacebook = (response) => {
      // console.log(response); 
      this.props.loginWithFacebook(response) }
       return (
          <div id="loginWithFacebook">
            <FacebookLogin
              appId="177478002862726"
              autoLoad={true}
              fields="name,email,picture"
              // onClick={componentClicked}
              callback={responseFacebook} />
          </div>
        );

  }
}
function mapStateToProps(state) {
  return {
    authenticated: state.user.authenticated
  };
}

export default connect(mapStateToProps, { loginWithFacebook })(Login);
