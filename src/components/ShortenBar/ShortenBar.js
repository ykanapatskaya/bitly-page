import React, { Component } from 'react';
import { connect } from 'react-redux';
import { shortLink } from '../../store/actions';

import './ShortenBar.css';

class ShortenBar extends Component {
  constructor(props) {
    super(props);

    this.state = {
      url: ''
    }
  } 

  handleInputChange = (e) => {
    this.setState({
      url: e.target.value
    })
  }

  handleEnterPress = (e) => {
    if (e.key === 'Enter') {
      this.addLink();
    }
  }

  resetInput() {
    this.setState({
      url: ''
    })
  }
  
  addLink = () => {
    this.props.shortLink(this.state.url);
    this.resetInput();
  }

  render() {
    return (
      <div className="ShortenBar">
        <input 
          value={this.state.url} 
          name="link" type="text" 
          onChange={this.handleInputChange}
          onKeyPress={this.handleEnterPress}
          placeholder="Paste a link to shorten it"
        />
        <button onClick={this.addLink}>Shorten</button>
      </div>
    )
  }
}

const mapDispatchToProps = dispatch => ({
  shortLink: (longUrl) => dispatch(shortLink(longUrl))
})

export default connect(null, mapDispatchToProps)(ShortenBar);
