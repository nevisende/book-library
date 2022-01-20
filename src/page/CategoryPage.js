import { useDispatch, useSelector } from 'react-redux';
import Category from '../components/Category';
import { addCategory } from '../redux/categories/categories';

export default function BookList() {
  const categoriesReducer = useSelector((state) => state.categoriesReducer);
  const dispatch = useDispatch();

  const submitCategoryToStore = (e) => {
    e.preventDefault();
    const newCategory = 'adventure';

    dispatch(addCategory(newCategory));
  };

  return (
    <ul>
      <Category />
      {categoriesReducer}
      <form>
        <input placeholder="Category name" id="nameInput" />
        <input placeholder="Book category" id="categoryInput" />
        <button type="submit" onClick={(e) => submitCategoryToStore(e)}>Add</button>
      </form>
    </ul>
  );
}
