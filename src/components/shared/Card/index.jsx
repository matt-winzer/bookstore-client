import React from 'react';
import styles from './card.module.scss';

const Card = ({ children, className}) => (
  <div className={`${styles.cardContainer} ${className}`}>
    {children}
  </div>
);

export default Card;
