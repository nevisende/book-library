import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import { removeBook } from '../redux/books/books';
import BookAPI from '../services/bookAPI';
import progressImage from '../assets/circlee.png';

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
      <div className="flex-1 flex flex-col justify-between">
        <div className="mb-4">
          <span className="font-bold text-gray-500 text-sm">{category}</span>
          <h3 className="font-bold text-xl p-0">{title}</h3>
          <span className="text-blue-400 text-sm">{id}</span>
        </div>
        <div className="text-blue-400">
          <button className="border-r-2 pr-6" type="button">Comments</button>
          <button className="border-r-2 pr-6 pl-6" type="button" onClick={deleteBook}>Remove</button>
          <button className="pl-6" type="button">Edit</button>
        </div>
      </div>
      <div className="flex-1 flex place-items-center">
        <div className="flex-1  border-r-2 flex place-items-center">
          <img src={progressImage} className="h-20 mr-4" alt="progress bar" />
          <div>
            <h4 className="text-3xl font-semibold">75%</h4>
            <span className="text-gray-400">Completed</span>
          </div>
        </div>
        <div className="flex-1 pl-10">
          <span className="text-gray-400 block mb-2">CURRENT CHAPTER</span>
          <span className="text-black block mb-2">Chapter 17</span>
          <button className="py-1 px-10 flex-none bg-[#0290ff] text-gray-300 rounded" type="submit">UPDATE PROGRESS</button>
        </div>
      </div>
    </>
  );
}

Book.propTypes = {
  id: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  category: PropTypes.string.isRequired,
};
