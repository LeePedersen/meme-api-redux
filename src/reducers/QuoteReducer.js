import constants from "./../constants";
const { initialState, types } = constants;

const quoteReducer = (state = initialState.memeList, action) => {
  let newQuote;
  let newQuoteSlice;
  //   console.log("reducerState: ", state);
  switch (action.type) {
    case types.RECEIVE_QUOTE:
      newQuote = Object.assign({}, state[action.quoteId], {
        isFetching: false,
        recievedAt: action.recievedAt,
        author: action.author,
        quote: action.quote,
        quoteId: action.quoteId
      });
      newQuoteSlice = Object.assign({}, state, {
        [action.quoteId]: newQuote
      });
      return newQuoteSlice;
    default:
      return state;
  }
};

export default quoteReducer;
