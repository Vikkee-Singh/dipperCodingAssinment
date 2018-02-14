import React, { Component } from 'react';
import { connect } from 'react-redux';
import cookie from 'react-cookie';
import { Link } from 'react-router';
import { CLIENT_ROOT_URL } from '../actions/index';
import { Row, Col, Container, Nav, NavItem, NavLink } from 'reactstrap';

class App extends Component {
  constructor(props){
    super(props)
  }
  render() {
    const user = cookie.load('user')
        return (
            <Container>
              <Nav tabs>
              <NavItem>
                {this.props.authenticated &&
                (<Link to="">Welcome {user.name}</Link>)}
              </NavItem>
                <NavItem className="pull-right">
                  {this.props.authenticated ?
                  (<Link to="logout">Logout</Link>):
                  (<Link to=""></Link>)}
                </NavItem>
              </Nav>

              <Row className="show-grid">
                <Col  xs={12} md={12}>
                  {this.props.children}
                </Col>
              </Row>
            </Container>
        );
      }

}

function mapStateToProps(state) {
  return {
    authenticated: state.user.authenticated
  };
}
export default connect(mapStateToProps, {}) (App);
