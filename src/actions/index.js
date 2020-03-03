import * as types from './../constants/ActionTypes';

export function searchForQuote(keyword) {
  return fetch('https://quote-garden.herokuapp.com/quotes/search/' + keyword).then(
    response => response.json(),
    error => console.log('An error occured: ', error) 
  ).then(function(json) {
    console.log(json);
    if(json.results.length > 0) {
      const author = json.results.quoteAuthor;
      const quote =  json.results.quoteText;
      console.log(author, ' said ', quote);
      // searchQuote(keyword, dispatch);
    } else {
      console.log('Something went wrong- we couldn\'t find any quotes for that!');
    }
  })
}

export const searchQuote = (keyword) => ({
  type: types.SEARCH_QUOTE,
  keyword
})