import React from 'react';

import Burger from '../../components/Burger/Burger';

import Auxiliary from '../../hoc/Auxiliary';

export class BurgerBuilder extends React.Component {
  state = {
    ingredients: {
      salad: 0,
      bacon: 0,
      cheese: 0,
      meat: 0,
    },
  };

  render() {
    return (
      <Auxiliary>
        <Burger ingredients={this.state.ingredients} />
        <div>Build Controls</div>
      </Auxiliary>
    );
  }
}
