import React from 'react';
import styles from './book-list.module.scss';

import BookItem from '../BookItem';

const BookList = ({ books }) => (
  <section className={styles.container}>
    <h2>List of Books</h2>
    {books.map(book => (
      <BookItem
        key={book.id}
        book={book}
      />
    ))}
  </section>
);


export default BookList;
