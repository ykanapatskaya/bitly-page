import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import Bitlink from '../Bitlink/Bitlink';

import './LinkList.css';

class LinkList extends Component {
  static propTypes = {
    links: PropTypes.array
  }

  render() {
    const { links } = this.props;

    return (
      <div className="LinkList">
        { links.map((el, index) => 
          <div className="LinkList-item">
            <Bitlink link={el} key={el.title + index} />
          </div>
        )}
      </div>
    )
  }
}

const mapStateToProps = state => ({
  ...state
})

export default connect(mapStateToProps, null)(LinkList);
