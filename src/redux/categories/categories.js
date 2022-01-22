const ADD_CATEGORY = 'categoryStore/categories/ADD_CATEGORY';
const REMOVE_CATEGORY = 'categoryStore/categories/REMOVE_CATEGORY';
const initialState = [];

export const addCategory = (payload) => ({
  type: ADD_CATEGORY,
  payload,
});
export const removeCategory = (categoryId) => ({
  type: REMOVE_CATEGORY,
  categoryId,
});

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_CATEGORY:
      return [...state, action.payload];
    case REMOVE_CATEGORY:
      return state.filter((category) => category.id !== action.categoryId);
    default:
      return state;
  }
};

export default reducer;
