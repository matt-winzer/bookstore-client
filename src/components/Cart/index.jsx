import React from 'react';
import styles from './cart.module.scss';

import CartItem from '../CartItem';

const Cart = ({ cartItems }) => {
  console.log(cartItems.length);
  return (
    <section className={styles.container}>
      <h2>Shopping Cart Items {!cartItems.length && '(None Currently)'}</h2>
      {cartItems.map((item) => (
        <CartItem
          key={item.id}
          item={item}
        />
      ))}
    </section>
  );
};

export default Cart;
