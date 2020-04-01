import React from 'react';
import styles from './cart.module.scss';

import Card from '../shared/Card';
// import CartItem from '../CartItem';

const Cart = ({ cartItems }) => {
  console.log(cartItems);
  return (
    <section className={styles.container}>
      <h2>Shopping Cart Items</h2>
      {/* {cartItems.map(item => (
        <CartItem
          key={item.id}
          item={item}
        />
      ))} */}
    </section>
  );
};

export default Cart;
