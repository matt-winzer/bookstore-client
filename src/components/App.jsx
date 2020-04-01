import React from 'react';
import '../App.scss';

import { baseUrl } from '../api/api.config';

import Navigation from './Navigation';
import BookList from './BookList';
import Cart from './Cart';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      books: [],
      activePage: 'list',
      cartItems: [],
      user: {
        id: 1,
      },
    };

    this.getAllBooks = this.getAllBooks.bind(this);
    this.changeActivePage = this.changeActivePage.bind(this);
  }

  componentDidMount() {
    this.getAllBooks();
    this.getCartBooks();
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

  getCartBooks() {
    const { user } = this.state;
    return fetch(`${baseUrl}/api/books/cart/${user.id}`)
      .then((res) => res.json())
      .then(({ books }) => {
        this.setState({
          cartItems: books,
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
      cartItems,
    } = this.state;

    return (
      <div>
        <Navigation
          active={activePage}
          changeActivePage={this.changeActivePage}
          numCartItems={cartItems.length}
        />
        {activePage === 'list' && (
          <BookList
            books={books}
          />
        )}
        {activePage === 'cart' && (
          <Cart
            cartItems={cartItems}
          />
        )}
      </div>
    );
  }
}

export default App;
