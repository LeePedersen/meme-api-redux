import * as types from "./../constants/ActionTypes";
import v4 from "uuid/v4";

export function searchForQuote(keyword) {
  return function(dispatch) {
    const localQuoteId = v4();
    return fetch("https://quote-garden.herokuapp.com/quotes/search/" + keyword)
      .then(
        response => response.json(),
        error => console.log("An error occured: ", error)
      )
      .then(function(json) {
        console.log(json);
        if (json.results.length > 0) {
          const author = json.results[0].quoteAuthor;
          const quote = json.results[0].quoteText;
          console.log(author, " said ", quote);
          dispatch(receiveQuote(author, quote, localQuoteId));
        } else {
          console.log(
            "Something went wrong- we couldn't find any quotes for that!"
          );
        }
      });
  };
}

export const receiveQuote = (author, quote, localQuoteId) => ({
  type: types.RECEIVE_QUOTE,
  author,
  quote,
  quoteId: localQuoteId,
  receivedAt: Date.now()
});
