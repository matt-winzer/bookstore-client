import React from 'react';
import styles from './cart-item.module.scss';

import Card from '../shared/Card';

const CartItem = ({ item }) => (
  <Card className={styles.cartItem}>
    <p>{item.title}</p>
    <p>Price: ${item.price}</p>
  </Card>
);

export default CartItem;
