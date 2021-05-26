import React from 'react';

import Backdrop from '../Backdrop/Backdrop';
import Auxiliary from '../../../hoc/Auxiliary';

import classes from './Modal.css';

const Modal = ({ children, show, modalClosed }) => (
  <Auxiliary>
    <Backdrop show={show} clicked={modalClosed} />
    <div
      className={classes.Modal}
      style={{
        transform: show ? 'translateY(0)' : 'translateY(-100vh)',
        opacity: show ? '1' : '0',
      }}
    >
      {children}
    </div>
  </Auxiliary>
);

export default Modal;
