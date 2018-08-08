import React, { Component } from 'react';
import { connect } from 'react-redux';
import { shortenLink } from '@/store/actions';

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

  handleSubmit = (e) => {
    e.preventDefault();
    this.props.shortenLink(this.state.url);
    this.resetInput();
  }

  resetInput() {
    this.setState({
      url: ''
    })
  }

  render() {
    return (
      <form className="ShortenBar" onSubmit={this.handleSubmit}>
        <div className="ShortenBar__input-wrapper">
          <input
            name="link"
            type="text"
            id="link"
            aria-label="Paste a link to shorten it"
            placeholder="Paste a link to shorten it"
            value={this.state.url}
            onChange={this.handleInputChange}
          />
        </div>
        <input type="submit" value="Shorten" />
      </form>
    )
  }
}

const mapDispatchToProps = dispatch => ({
  shortenLink: (longUrl) => dispatch(shortenLink(longUrl))
})

export default connect(null, mapDispatchToProps)(ShortenBar);
