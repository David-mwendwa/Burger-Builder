import React from 'react';

import BuildControl from './BuildControl/BuildControl';

import classes from './BuildControls.css';

const controls = [
  { label: 'Salad', type: 'salad' },
  { label: 'Bacon', type: 'bacon' },
  { label: 'Cheese', type: 'cheese' },
  { label: 'Meat', type: 'meat' },
];

const BuildControls = ({ ingredientAdded, ingredientDeducted, disabled, price }) => (
  <div className={classes.BuildControls}>
    <p>Current Price: <strong>{price.toFixed(2)}</strong></p>

    {controls.map((ctrl) => (
      <BuildControl
        key={ctrl.label}
        label={ctrl.label}
        added={() => ingredientAdded(ctrl.type)}
        removed={() => ingredientDeducted(ctrl.type)}
        disabled={disabled[ctrl.type]}
      />
    ))}
  </div>
);

export default BuildControls;
