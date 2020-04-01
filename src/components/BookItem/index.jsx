import React from 'react';
import styles from './book-item.module.scss';

import Card from '../shared/Card';

const BookItem = ({ book, addBookToCart }) => (
  <Card>
    <h3>{book.title}</h3>
    <p>{book.description}</p>
    <p>Authors:</p>
    <ul>
      {book.authors.map((author) => (
        <li key={author.name}>{author.name}</li>
      ))}
    </ul>
    <div className={styles.purchaseContainer}>
      <p>Price: ${book.price}</p>
      <button className={styles.addButton} type="submit" onClick={() => addBookToCart(book.id)}>Add To Cart!</button>
    </div>
  </Card>
);

export default BookItem;
