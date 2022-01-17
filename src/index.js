import React from 'react';
import { render } from 'react-dom';
import {
  BrowserRouter,
  Routes,
  Route,
  Link,
} from 'react-router-dom';
import Books from './redux/books/books';
import Categories from './redux/categories/categories';
import logo from './assets/logo.svg';

const rootElement = document.getElementById('root');

render(
  <BrowserRouter>
    <ul>
      <img src={logo} alt="logo" />
      <li>
        <Link to="/">Books</Link>
      </li>
      <li>
        <Link to="categories">Categories</Link>
      </li>
    </ul>
    <Routes>
      <Route path="/" element={<Books />} />
      <Route path="categories" element={<Categories />} />
    </Routes>
  </BrowserRouter>,
  rootElement,
);
