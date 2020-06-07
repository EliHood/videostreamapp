import produce from 'immer';
const initialState = {
  gender: '',
  age: 18,
  isLoading: true,
  error: null,
};

const userReducer = (state = initialState, action) =>
  produce(state, draft => {
    switch (action.type) {
      case 'SET_GENDER':
        draft.gender = action.data;
        return;
      case 'SET_AGE':
        draft.age = action.data;
        return;
    }
    // upon submit, loading spinner will show, after success loading will stop
  });

export default userReducer;
