import React from 'react';
import styles from './book-item.module.scss';

import Card from '../shared/Card';

const BookItem = ({ book }) => (
  <Card>
    <p>Book title: {book.title}</p>
  </Card>
);

export default BookItem;
