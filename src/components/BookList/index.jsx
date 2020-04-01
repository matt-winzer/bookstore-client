import React from 'react';
import styles from './book-list.module.scss';

import BookItem from '../BookItem';

const BookList = ({ books, addBookToCart }) => (
  <section className={styles.container}>
    <h2>List of Books</h2>
    {books.map(book => (
      <BookItem
        key={book.id}
        book={book}
        addBookToCart={addBookToCart}
      />
    ))}
  </section>
);


export default BookList;
