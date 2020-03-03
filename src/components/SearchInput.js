import React from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { searchForQuote } from "./../actions";

function SearchInput({ dispatch }) {
  let keyword;
  return (
    <div>
      <form
        onSubmit={e => {
          e.preventDefault();
          dispatch(searchForQuote(keyword.value));
        }}
      >
        <input
          type="text"
          placeholder="love, war, food, comedy"
          ref={node => {
            keyword = node;
          }}
        ></input>
        <button>Search</button>
      </form>
    </div>
  );
}

SearchInput.propTypes = {
  dispatch: PropTypes.func
};

export default connect()(SearchInput);
