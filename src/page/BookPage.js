/* eslint-disable jsx-a11y/control-has-associated-label */
import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import inputChangingHandler from '../helper/inputChangingHandler';
import Book from '../components/book';
import { addBook } from '../redux/books/books';
import BookAPI from '../services/bookAPI';

import useDeliveredBooks from '../hooks/useDeliveredBooks';

const categoryList = [
  'Arts & Photography', 'Business & Money', 'Engineering', 'Health, Fitness & Dieting',
  'History', 'Mystery, Thriller & Suspense', 'Education & Teaching', 'Crafts, Hobbies & Home',
  'Comics & Graphic Novels', 'Biographies & Memoirs', 'Computers & Technology', 'Law', 'Romance',
  'Science & Math', 'Travel', 'Science Fiction & Fantasy',
];

export default function BookList() {
  const [bookName, setBookName] = useState('');
  const [authorName, setAuthorName] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('');
  const dispatch = useDispatch();
  const bookList = useSelector((state) => state.booksReducer);
  useDeliveredBooks(dispatch);
  const bookAPI = new BookAPI();

  const submitBookToStore = (e) => {
    e.preventDefault();
    const newBook = {
      item_id: authorName,
      title: bookName,
      category: selectedCategory,
    };// will be interactive and unique when Book apı used.
    dispatch(addBook(newBook));
    bookAPI.postBook(newBook);
    setAuthorName('');
    setBookName('');
    setSelectedCategory('');
  };

  return (
    <>
      <form>
        <label htmlFor="bookName">
          Book
          <input id="bookName" placeholder="Book" value={bookName} onChange={(e) => inputChangingHandler(e, setBookName)} />
        </label>
        <label htmlFor="author">
          Author
          <input id="author" placeholder="Author" value={authorName} onChange={(e) => inputChangingHandler(e, setAuthorName)} />
        </label>
        <label htmlFor="selectedCategory">
          Category

          <select
            id="selectedCategory"
            value={selectedCategory}
            onChange={(e) => inputChangingHandler(e, setSelectedCategory)}
            onBlur={(e) => inputChangingHandler(e, setSelectedCategory)}
          >
            <option placeholder="Category" />
            {categoryList.sort().map((categor) => (
              <option key={categor} value={categor}>{categor}</option>))}

          </select>
        </label>
        <button type="submit" onClick={(e) => submitBookToStore(e)}>Add</button>
      </form>
      <ul>
        {bookList.sort((a, b) => {
          const fa = a.category.toLowerCase();
          const fb = b.category.toLowerCase();

          if (fa < fb) {
            return -1;
          }
          if (fa > fb) {
            return 1;
          }
          return 0;
        }).map((book) => (
          <li key={book.item_id}>
            <Book id={book.item_id} title={book.title} category={book.category} />
          </li>
        ))}
      </ul>
    </>
  );
}
