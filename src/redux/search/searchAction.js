import actionTypes from "../actionTypes";

const searchAction = (text) => (dispatch) => {
  dispatch({ type: actionTypes.GET_INPUT, payload: text });
};

export default searchAction;
