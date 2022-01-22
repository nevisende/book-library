import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import { removeBook } from '../redux/books/books';
import BookAPI from '../services/bookAPI';

export default function Book({
  id,
  title,
  category,
}) {
  const dispatch = useDispatch();
  const bookAPI = new BookAPI();

  function deleteBook(e) {
    e.preventDefault();
    dispatch(removeBook(id));
    bookAPI.deleteBook(id);
  }
  return (
    <>
      <span>{category}</span>
      <h3>{title}</h3>
      <span>{id}</span>
      <button type="button" onClick={deleteBook}>Remove</button>
    </>
  );
}

Book.propTypes = {
  id: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  category: PropTypes.string.isRequired,
};
