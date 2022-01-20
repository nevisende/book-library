import { useDispatch } from 'react-redux';
import Book from '../components/Book';
// import your Action Creators
import { addBook } from '../redux/books/books';

export default function BookList() {
  const dispatch = useDispatch();

  const submitBookToStore = () => {
    const newBook = {
      id: 0, // make sure it's unique
      title: 'jaa',
      author: 'furkan',
    };

    // dispatch an action and pass it the newBook object (your action's payload)
    dispatch(addBook(newBook));
  };
  return (
    <ul>
      <Book />

      <form>
        <input placeholder="Book name" id="nameInput" />
        <input placeholder="Book category" id="categoryInput" />
        <button type="submit" onClick={submitBookToStore}>Add</button>
      </form>
    </ul>
  );
}
