const ADD_BOOK = 'bookStore/books/ADD_BOOK';
const ADD_BOOKS = 'bookStore/books/ADD_BOOKS';
const REMOVE_BOOK = 'bookStore/books/REMOVE_BOOK';
const initialState = [];

export const addBook = (payload) => ({
  type: ADD_BOOK,
  payload,
});

export const addMultiBook = (payload) => ({
  type: ADD_BOOKS,
  payload,
});

export const removeBook = (bookId) => ({
  type: REMOVE_BOOK,
  bookId,
});

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_BOOKS:
      return [...state, ...action.payload];
    case ADD_BOOK:
      return [...state, action.payload];
    case REMOVE_BOOK:
      return state.filter((book) => book.item_id !== action.bookId);
    default:
      return state;
  }
};

export default reducer;
