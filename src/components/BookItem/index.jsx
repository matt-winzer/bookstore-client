import React from 'react';
import styles from './book-item.module.scss';

import Card from '../shared/Card';

const BookItem = ({ book }) => (
  <Card>
    <h3>{book.title}</h3>
    <p>{book.description}</p>
    <p>Authors:</p>
    <ul>
      {book.authors.map((author) => (
        <li>{author.name}</li>
      ))}
    </ul>
    <div className={styles.purchaseContainer}>
      <p>Price: ${book.price}</p>
    </div>
  </Card>
);

export default BookItem;
