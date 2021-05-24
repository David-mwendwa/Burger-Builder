import React from 'react';

import Burger from '../../components/Burger/Burger'

import Auxiliary from '../../hoc/Auxiliary';


export class BurgerBuilder extends React.Component {
  render() {
    return (
      <Auxiliary>
        <Burger />
        <div>Build Controls</div>
      </Auxiliary>
    );
  }
}


