import Book from './book';

export default function BookList() {
  return (
    <ul>
      <Book />
      <Book />
      <Book />
      <Book />
      <Book />
      <form>
        <input placeholder="Book name" id="nameInput" />
        <input placeholder="Book category" id="categoryInput" />
        <button type="submit">Add</button>
      </form>
    </ul>
  );
}
