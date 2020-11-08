import actionTypes from "../actionTypes";

const initialState = {
  input: "",
};

const searchReducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.GET_INPUT:
      return {
        ...state,
        input: action.payload,
      };
    default:
      return state;
  }
};

export default searchReducer;
