import React, { Component } from 'react';
import PropTypes from 'prop-types';
import ReactDOM from 'react-dom';

/**
 * Portal to use for modals
 * Currently a class, because react doesn't support
 * a hook for portals yet (16.8.6)
 */
class Portal extends Component {
  constructor(props) {
    super(props);
    const windowExists = typeof window !== 'undefined';
    this.modalRoot = windowExists ? document.getElementById('modal-root') : null;
  }

  render() {
    if (!this.modalRoot) {
      return null;
    }
    const { children } = this.props;
    const modal = (<>{children}</>);
    return ReactDOM.createPortal(modal, this.modalRoot);
  }
}

Portal.propTypes = { children: PropTypes.number };

export default Portal;
