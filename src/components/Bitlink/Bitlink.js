import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './Bitlink.css';

// TODO: Pure component ???

class Bitlink extends Component {
  static propTypes = {
    link: PropTypes.shape({
      title: PropTypes.string,
      long_url: PropTypes.string,
      short_url: PropTypes.string,
      global_count: PropTypes.number
    })
  }

  copyIntoClipboard = () => {
    const bitlyUrl = this.props.link.short_url;

    navigator.clipboard.writeText(bitlyUrl).then(function() {
      console.log('Async: Copying to clipboard was successful!');
    }, function(err) {
      console.error('Async: Could not copy text: ', err);
    });
  }

  renderLink(name) {
    const { long_url, title } = this.props.link;

    return <a href={long_url} title={title || 'Bitly link'} target="_blank">{ name }</a>
  }

  render() {
    const { 
      long_url, 
      title, 
      global_count, 
      short_url 
    } = this.props.link;

    return (
      <div className="Bitlink">
        <h3>
          { this.renderLink(title || long_url) }
        </h3>
        { title && this.renderLink(long_url) }
        <div className="Bitlink-details">
          <span className="Bitlink-shorten-link" onClick={this.copyIntoClipboard}>
            { short_url }
          </span>
          <span className="Bitlink-counter">
            10
            { global_count }
          </span>
        </div>
      </div>
    )
  }
}

export default Bitlink;
