import React from 'react';

import Auxiliary from '../../../hoc/Auxiliary';
import Button from '../../UI/Button/Button';

const OrderSummary = ({
  ingredients,
  purshaseCancelled,
  purshaseContinued,
  price,
}) => {
  const ingredientSummary = Object.keys(ingredients).map((igKey) => {
    return (
      <li key={igKey}>
        <span style={{ textTransform: 'capitalize' }}>{igKey}</span>:{' '}
        {ingredients[igKey]}
      </li>
    );
  });

  return (
    <Auxiliary>
      <h3>Your Order</h3>
      <p>A delicious burger with the following ingredients</p>
      <ul>{ingredientSummary}</ul>
      <p>
        <strong>Total price: {price.toFixed(2)}</strong>
      </p>
      <p>Continue to checkout?</p>
      <Button btnType='Danger' clicked={purshaseCancelled}>
        CANCEL
      </Button>
      <Button btnType='Success' clicked={purshaseContinued}>
        CONTINUE
      </Button>
    </Auxiliary>
  );
};

export default OrderSummary;
