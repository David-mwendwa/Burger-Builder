import React from 'react';

import Burger from '../../components/Burger/Burger';
import BuildControls from '../../components/Burger/BuildControls/BuildControls';
import Modal from '../../components/UI/Modal/Modal';
import OrderSummary from '../../components/Burger/OrderSummary/OrderSummary';
import axios from '../../axios-orders';

import Auxiliary from '../../hoc/Auxiliary/Auxiliary';

const INGREDIENT_PRICES = {
  salad: 0.5,
  cheese: 0.4,
  meat: 1.3,
  bacon: 0.7,
};

export class BurgerBuilder extends React.Component {
  state = {
    ingredients: {
      salad: 0,
      bacon: 0,
      cheese: 0,
      meat: 0,
    },
    totalPrice: 4,
    purchasable: false,
    purshasing: false,
  };

  updatePurshaseState = () => {
    const ingredients = { ...this.state.ingredients };
    const sum = Object.keys(ingredients)
      .map((igKey) => ingredients[igKey])
      .reduce((sum, el) => sum + el, 0);

    this.setState({ purchasable: sum >= 0 });
  };

  addIngredientHandler = (type) => {
    const oldCount = this.state.ingredients[type];
    const updatedCount = oldCount + 1;
    const updatedIngredients = {
      ...this.state.ingredients,
    };
    updatedIngredients[type] = updatedCount;
    const priceAddition = INGREDIENT_PRICES[type];
    const oldPrice = this.state.totalPrice;
    const newPrice = oldPrice + priceAddition;
    this.setState({ totalPrice: newPrice, ingredients: updatedIngredients });
    this.updatePurshaseState();
  };

  removeIngredientHandler = (type) => {
    const oldCount = this.state.ingredients[type];
    if (oldCount <= 0) return;
    const updatedCount = oldCount - 1;
    const updatedIngredients = {
      ...this.state.ingredients,
    };
    updatedIngredients[type] = updatedCount;
    const priceDeduction = INGREDIENT_PRICES[type];
    const oldPrice = this.state.totalPrice;
    const newPrice = oldPrice + priceDeduction;
    this.setState({ totalPrice: newPrice, ingredients: updatedIngredients });
  };

  purshaseHandler = () => {
    this.setState({ purshasing: true });
  };

  purshaseCancelHandler = () => {
    this.setState({ purshasing: false });
  };

  purchaseContinueHandler = () => {
    const order = {
      ingredients: this.state.ingredients,
      price: this.state.totalPrice,
      customer: {
        name: 'Dave mwens',
        address: {
          street: 'Test street',
          zipCode: '22324',
          country: 'Kenya',
        },
        email: 'test@gmail.com',
      },
      deliveryMethod: 'fastest',
    };
    axios
      .post('/orders.json', order)
      .then((response) => console.log(response))
      .catch((error) => console.log(error));
  };

  render() {
    const disabledInfo = { ...this.state.ingredients };
    for (let key in disabledInfo) disabledInfo[key] = disabledInfo[key] <= 0;

    return (
      <Auxiliary>
        <Modal
          show={this.state.purshasing}
          modalClosed={this.purshaseCancelHandler}>
          <OrderSummary
            ingredients={this.state.ingredients}
            purshaseCancelled={this.purshaseCancelHandler}
            purshaseContinued={this.purchaseContinueHandler}
            price={this.state.totalPrice}
          />
        </Modal>
        <Burger ingredients={this.state.ingredients} />
        <BuildControls
          ingredientAdded={this.addIngredientHandler}
          ingredientDeducted={this.removeIngredientHandler}
          disabled={disabledInfo}
          purchasable={this.state.purchasable}
          ordered={this.purshaseHandler}
          price={this.state.totalPrice}
        />
      </Auxiliary>
    );
  }
}
