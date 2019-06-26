import React from 'react';
import PropTypes from 'prop-types';
import Portal from '../utils/portal';

import { Popup, Text } from '../ui';

const Modal = ({ title, content, close = () => {}, open = false }) => {
  if (!open) {
    return null;
  }

  return (
    <Portal>
      <Popup>
        <Popup.Curtain onClick={close} />
        <Popup.Box>
          <Popup.Head>
            <Text type="h2" margin={false}>{title}</Text>
            <Popup.Close onClick={close}>&times;</Popup.Close>
          </Popup.Head>
          <Popup.Body>
            {content}
          </Popup.Body>
        </Popup.Box>
      </Popup>
    </Portal>
  );
};

Modal.propTypes = {
  title: PropTypes.object,
  content: PropTypes.node,
  close: PropTypes.func,
  open: PropTypes.bool,
};

export default Modal;
