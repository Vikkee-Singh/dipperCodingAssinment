import React, { Component } from 'react';
import { connect } from 'react-redux';
import cookie from 'react-cookie';
import { FormGroup, Label, Input } from 'reactstrap';
import { Target } from 'react-popper';
import { searchArtist } from '../../actions/index';
import DataTable from './DataTable';

class Dashboard extends Component {
  constructor(props){
    super(props)
    if (!cookie.load('token')) { window.location.href = `${CLIENT_ROOT_URL}` }
    this.state ={
      serch: '',
      Artist: []
    }
    this.click= this.click.bind(this)
  }
  componentWillReceiveProps(nextProps){
    console.log(nextProps.artist)
    let artist = []
    nextProps.artist.forEach((element,index) => {
      artist[index] = [element.artistName,element.trackName,element.primaryGenreName,element.trackPrice]
  })
  this.setState({Artist: artist})
  }
  click(e){
    this.setState({ [e.target.name]:e.target.value })
    this.props.searchArtist(e.target.value)
  }
  render() {
    // console.log(this.props.artist)
    return (<div> 
        <FormGroup>
          <Label for="exampleEmail">Artist Name</Label>
          <Input type="text" name="serch" onChange={this.click} placeholder="Enter Artist Name"/>
        </FormGroup> 
        {this.state.Artist.length && <DataTable data={this.state.Artist} column={this.column}/>}
      </div>);
  }
  column = [
    { title: "Artist Name" },    
    { title: "Track Name" },
    { title: "Genre" },
    { title: "price" },
  ]
}

function mapStateToProps(state) {
  return {
    authenticated: state.user.authenticated,
    artist: state.user.artist
  };
}

export default connect(mapStateToProps, {searchArtist})(Dashboard);
