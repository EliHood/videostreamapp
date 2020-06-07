import produce from 'immer';
const initialState = {
  isLoading: true,
  error: null,
};

const chatReducer = (state = initialState, action) =>
  produce(state, draft => {
    switch (action.type) {
    }
  });

export default chatReducer;
