import React from 'react';

import classes from './Backdrop.css';

const Backdrop = ({ show, clicked }) =>
  show ? <div className={classes.Backdrop} onClick={clicked}></div> : null;

export default Backdrop;
