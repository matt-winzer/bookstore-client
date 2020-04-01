import React from 'react';
import '../App.scss';

import { baseUrl } from '../api/api.config';

import Navigation from './Navigation';
import BookList from './BookList';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      books: [],
      activePage: 'list',
    };

    this.getAllBooks = this.getAllBooks.bind(this);
    this.changeActivePage = this.changeActivePage.bind(this);
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

  changeActivePage(activePage) {
    this.setState({
      activePage,
    });
  }

  render() {
    const {
      books,
      activePage,
    } = this.state;

    return (
      <div>
        <Navigation
          active={activePage}
          changeActivePage={this.changeActivePage}
        />
        {activePage === 'list' && (
          <BookList
            books={books}
          />
        )}
      </div>
    );
  }
}

export default App;