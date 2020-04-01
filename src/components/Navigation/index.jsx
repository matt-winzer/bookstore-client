import React from 'react';
import styles from './navigation.module.scss';

import Card from '../shared/Card';

const Navigation = ({ active, changeActivePage, numCartItems }) => (
  <Card className={styles.navigation}>
    <p className={active === 'list' ? styles.active : ''} onClick={() => changeActivePage('list')}>Books List</p>
    <h1>Bookstore!</h1>
    <p className={active === 'cart' ? styles.active : ''} onClick={() => changeActivePage('cart')}>Cart ({numCartItems})</p>
  </Card>
);

export default Navigation;
