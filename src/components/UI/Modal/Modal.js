import React, { Component } from 'react';

import Backdrop from '../Backdrop/Backdrop';
import Auxiliary from '../../../hoc/Auxiliary';

import classes from './Modal.css';

class Modal extends Component {
  shouldComponentUpdate(nextProps, nextState) {
    return nextProps.show !== this.props.show
  }

  componentWillUnmount() {
    console.log("Modal will update");
  }
  
  render() {
    return (
      <Auxiliary>
        <Backdrop show={this.props.show} clicked={this.props.modalClosed} />
        <div
          className={classes.Modal}
          style={{
            transform: show ? 'translateY(0)' : 'translateY(-100vh)',
            opacity: show ? '1' : '0',
          }}
        >
          {this.props.children}
        </div>
      </Auxiliary>
    )
  }
} = ({ children, show, modalClosed }) => (
  
);

export default Modal;
