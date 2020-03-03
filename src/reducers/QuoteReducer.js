import constants from "./../constants";
const { initialState, types } = constants;

const quoteReducer = (state = initialState.memeList, action) => {
  console.log("reducerState: ", state);
  return state;
};

export default quoteReducer;
