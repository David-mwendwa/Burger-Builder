import React from 'react';

import BuildControl from './BuildControl/BuildControl'

import classes from './BuildControls.css'

const BuildControls = (props) => (
  <div className={classes.BuildControls}>
    <BuildControl />
  </div>
)

export default BuildControls