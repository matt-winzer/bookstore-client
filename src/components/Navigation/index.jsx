import React from 'react';
import styles from './navigation.module.scss';

import Card from '../shared/Card';

const Navigation = ({ active }) => (
  <Card className={styles.navigation}>
    <p className={active === 'list' && styles.active}>Books List</p>
    <h1>Bookstore!</h1>
    <p className={active === 'cart' && styles.active}>Cart</p>
  </Card>
);

export default Navigation;
