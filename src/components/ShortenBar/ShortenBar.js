import React, { Component } from 'react';
import { connect } from 'react-redux';
import { shortenLink } from '@/store/actions';

import './ShortenBar.css';

class ShortenBar extends Component {
  constructor(props) {
    super(props);

    this.state = {
      url: '',
      error: null
    }
  }

  handleInputChange = (e) => {
    if (this.state.error) {
      this.resetErrors();
    }

    this.setState({
      url: e.target.value
    })
  }

  resetErrors() {
    this.setState({
      error: null
    })
  }

  handleSubmit = (e) => {
    e.preventDefault();
    this.props.shortenLink(this.state.url)
      .then(() => {
        this.resetInput();
      })
      .catch(errors => {
        this.setError(errors);
      });
  }

  setError(err) {
    this.setState({
      error: err
    })
  }

  resetInput() {
    this.setState({
      url: ''
    })
  }

  render() {
    const { error, url } = this.state;

    return (
      <form 
        className={`ShortenBar ${error ? 'error' : ''}`} 
        onSubmit={this.handleSubmit}
      >
        <div className="ShortenBar__error">Something went wrong. Try again</div>
        <div className="ShortenBar__wrapper">
          <div className="ShortenBar__input">
            <input
              name="link"
              type="text"
              id="link"
              aria-label="Paste a link to shorten it"
              placeholder="Paste a link to shorten it"
              value={url}
              onChange={this.handleInputChange}
            />
          </div>
          <div className="ShortenBar__submit">
            <input type="submit" value="Shorten" disabled={!url} />
          </div>
        </div>
      </form>
    )
  }
}

const mapDispatchToProps = dispatch => ({
  shortenLink: (longUrl) => dispatch(shortenLink(longUrl))
})

export default connect(null, mapDispatchToProps)(ShortenBar);
