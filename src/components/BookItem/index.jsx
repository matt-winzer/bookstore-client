import React from 'react';
import styles from './book-item.module.scss';

const BookItem = ({ book }) => (
  <p>Book title: {book.title}</p>
);

export default BookItem;
