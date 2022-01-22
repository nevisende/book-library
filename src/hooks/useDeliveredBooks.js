import { useState, useEffect } from 'react';
import { addMultiBook } from '../redux/books/books';
import BookAPI from '../services/bookAPI';

const localCache = {};

export default function useDeliveredBooks(dispatch) {
  const [bookList, setBookList] = useState([]);
  const [status, setStatus] = useState('unloaded');
  const bookAPI = new BookAPI();

  useEffect(() => {
    async function requestBookList() {
      setBookList([]);
      setStatus('loading');
      await bookAPI.getBookList()
        .then((data) => {
          localCache.books = data || [];
          setBookList(localCache.books);
          setStatus('loaded');
          dispatch(addMultiBook(localCache.books));
        });
    }

    requestBookList();
  }, []);

  return [bookList, status];
}
