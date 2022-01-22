import {
  BrowserRouter,
  Routes,
  Route,
  Link,
} from 'react-router-dom';
import { Provider } from 'react-redux';
import store from './redux/configureStore';

import Books from './page/BookPage';
import Categories from './page/CategoryPage';
import logo from './assets/logo.svg';

export default function App() {
  return (
    <Provider store={store}>
      <div>
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
            <Route path="categories" element={<Categories />} />
            <Route path="/" element={<Books />} />
          </Routes>
        </BrowserRouter>
      </div>
    </Provider>
  );
}
