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
    this.getCartBooks = this.getCartBooks.bind(this);
    this.addBookToCart = this.addBookToCart.bind(this);
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
      })
      .catch((err) => {
        console.log(err);
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
      })
      .catch((err) => {
        console.log(err);
      });
  }

  changeActivePage(activePage) {
    this.setState({
      activePage,
    });
  }

  addBookToCart(bookId) {
    const { user } = this.state;
    return fetch(`${baseUrl}/api/books/cart/${user.id}`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ bookId }),
    })
      .then((res) => res.json())
      .then(({ success }) => {
        if (success) this.getCartBooks();
      })
      .catch((err) => {
        console.log(err);
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
            addBookToCart={this.addBookToCart}
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
