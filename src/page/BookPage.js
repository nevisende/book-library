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
    };
    dispatch(addBook(newBook));
    bookAPI.postBook(newBook);
    setAuthorName('');
    setBookName('');
    setSelectedCategory('');
  };

  return (
    <main className="bg-[#f5f6fa] pb-24 border-t-2">
      <ul className="flex flex-col mx-20 pt-8 pb-8">
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
          <li key={book.item_id} className="bg-white border-[1px] border-gray-300 rounded my-2 px-6 py-8 flex justify-between">
            <Book id={book.item_id} title={book.title} category={book.category} />
          </li>
        ))}
      </ul>
      <hr className="mx-20" />
      <h2 className="text-gray-400 w-full px-20 my-5 font-bold">ADD NEW  BOOK</h2>
      <form className="flex px-20 gap-8">
        <input className="border-2 py-1 px-4 flex-1 rounded" id="bookName" placeholder="Book Title" value={bookName} onChange={(e) => inputChangingHandler(e, setBookName)} />
        <input className="border-2 py-1 px-4 flex-1 rounded" id="author" placeholder="Author" value={authorName} onChange={(e) => inputChangingHandler(e, setAuthorName)} />
        <select
          className="border-2 py-1 px-4 flex-1 text-gray-400 rounded"
          id="selectedCategory"
          value={selectedCategory}
          onChange={(e) => inputChangingHandler(e, setSelectedCategory)}
          onBlur={(e) => inputChangingHandler(e, setSelectedCategory)}
        >
          <option>Category</option>
          {categoryList.sort().map((categor) => (
            <option key={categor} value={categor}>{categor}</option>))}

        </select>

        <button className="py-1 px-10 flex-none bg-[#0290ff] text-white rounded" type="submit" onClick={(e) => submitBookToStore(e)}>Add Book</button>
      </form>
    </main>
  );
}
