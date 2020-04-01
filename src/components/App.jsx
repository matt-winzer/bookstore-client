import React from 'react';
import '../App.scss';

import { baseUrl } from '../api/api.config';

import BookList from './BookList';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      books: [],
    };

    this.getAllBooks = this.getAllBooks.bind(this);
  }

  componentDidMount() {
    this.getAllBooks();
  }

  getAllBooks() {
    return fetch(`${baseUrl}/api/books`)
      .then((res) => res.json())
      .then(({ books }) => {
        this.setState({
          books,
        });
      });
  }

  render() {
    const {
      books,
    } = this.state;

    return (
      <div>
        <h1>Welcome to the Bookstore!</h1>
        <BookList
          books={books}
        />
      </div>
    );
  }
}

export default App;
