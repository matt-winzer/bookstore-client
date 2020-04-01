import React from 'react';
import styles from './cart-item.module.scss';

import Card from '../shared/Card';

const CartItem = ({ item, removeBookFromCart }) => (
  <Card className={styles.cartItem}>
    <p>{item.title}</p>
    <div className={styles.priceRemove}>
      <p>Price: ${item.price}</p>
      <button className={styles.removeButton} type="submit">Remove from Cart</button>
    </div>
  </Card>
);

export default CartItem;
