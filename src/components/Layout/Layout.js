import React from 'react';

import Auxiliary from '../../hoc/Auxiliary';
import Toolbar from '../Navigation/Toolbar/Toolbar';

import classes from './Layout.css';

const Layout = ({ children }) => (
  <Auxiliary>
    <Toolbar />
    <main className={classes.Content}>{children}</main>
  </Auxiliary>
);

export default Layout;
