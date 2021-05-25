import React from 'react';

import { BurgerIngredient } from './BurgerIngredient/BurgerIngredient';
import BuildControls from './BuildControls/BuildControls'

import classes from './Burger.css';

const Burger = ({ ingredients }) => {
  let transformedIngredients = Object.keys(ingredients).map((igKey) => {
    return [...Array(ingredients[igKey])].map((_, i) => {
      return <BurgerIngredient key={igKey + 1} type={igKey} />
    });
  }).reduce((arr, el) => arr.concat(el), [])

  if (transformedIngredients.length === 0)
    transformedIngredients = <p>Please start adding ingredients</p>

  return (
    <div className={classes.Burger}>
      <BurgerIngredient type="bread-top" />
      {transformedIngredients}
      <BurgerIngredient type="bread-bottom" />
      <BuildControls />
    </div>
  );
};

export default Burger;
