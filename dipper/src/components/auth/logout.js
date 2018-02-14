import React, { Component } from 'react';
import { connect } from 'react-redux';
import { logout } from '../../actions/index';

class Logout extends Component {
  componentDidMount(){
    this.props.logout()
  }
  render() {
    return (<div></div>);
  }
}

export default connect(null, {logout})(Logout);
