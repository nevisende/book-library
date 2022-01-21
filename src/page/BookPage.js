import { useDispatch } from 'react-redux';
import Book from '../components/book';
import { addBook } from '../redux/books/books';

export default function BookList() {
  const dispatch = useDispatch();

  const submitBookToStore = (e) => {
    e.preventDefault();
    const newBook = {
      id: 0,
      title: 'Domain Driven Design',
      author: 'Eric Evans',
    };// will be interactive and unique when Book apı used.

    // dispatch an action and pass it the newBook object (your action's payload)
    dispatch(addBook(newBook));
  };
  return (
    <ul>
      <Book />

      <form>
        <input placeholder="Book name" id="nameInput" />
        <input placeholder="Book category" id="categoryInput" />
        <button type="submit" onClick={(e) => submitBookToStore(e)}>Add</button>
      </form>
    </ul>
  );
}
