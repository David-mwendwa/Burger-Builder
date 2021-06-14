import React from 'react';

import Auxiliary from '../../hoc/Auxiliary';
import Toolbar from '../Navigation/Toolbar/Toolbar';
import SideDrawer from '../Navigation/SideDrawer/SideDrawer';

import classes from './Layout.css';

const Layout = ({ children }) => (
  <Auxiliary>
    <Toolbar />
    <SideDrawer />
    <main className={classes.Content}>{children}</main>
  </Auxiliary>
);

export default Layout;
