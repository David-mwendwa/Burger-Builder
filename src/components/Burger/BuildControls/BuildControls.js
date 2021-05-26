import React from 'react';

import BuildControl from './BuildControl/BuildControl';

import classes from './BuildControls.css';

const controls = [
  { label: 'Salad', type: 'salad' },
  { label: 'Bacon', type: 'bacon' },
  { label: 'Cheese', type: 'cheese' },
  { label: 'Meat', type: 'meat' },
];

const BuildControls = (props) => {
  const {
    ingredientAdded,
    ingredientDeducted,
    disabled,
    price,
    purchasable,
    ordered,
  } = props;

  return (
    <div className={classes.BuildControls}>
      <p>
        Current Price: <strong>{price.toFixed(2)}</strong>
      </p>

      {controls.map((ctrl) => (
        <BuildControl
          key={ctrl.label}
          label={ctrl.label}
          added={() => ingredientAdded(ctrl.type)}
          removed={() => ingredientDeducted(ctrl.type)}
          disabled={disabled[ctrl.type]}
        />
      ))}

      <button
        className={classes.OrderButton}
        disabled={!purchasable}
        onClick={ordered}
      >
        ORDER NOW
      </button>
    </div>
  );
};

export default BuildControls;
