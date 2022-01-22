import {
  BrowserRouter,
  Routes,
  Route,
  Link,
} from 'react-router-dom';
import { Provider } from 'react-redux';
import store from './redux/configureStore';
import personSvg from './assets/person.svg';
import Books from './page/BookPage';
import Categories from './page/CategoryPage';

export default function App() {
  return (
    <Provider store={store}>
      <div className="p-0 m-0 min-h-full">
        <BrowserRouter>
          <ul className="flex px-20 py-4 flex-row place-items-center justify-between w-full">
            <div className="flex flex-row place-items-center gap-10">
              <h1 className="text-3xl font-bold text-[#0290ff]">Book Library</h1>
              <li>
                <Link className="text-gray-700 font-semibold" to="/">BOOKS</Link>
              </li>
              <li>
                <Link className="text-gray-400 font-semibold" to="categories">CATEGORIES</Link>
              </li>
            </div>
            <div className="bg-gray-100 p-4 rounded-full">
              <img src={personSvg} className="w-5 fill-blue-700" alt="person icon" />
            </div>
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
