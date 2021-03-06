import React from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";

const MemeList = state => {
  console.log("memeList state: ", state);
  return (
    <div>
      <h4>Memes</h4>
      {Object.keys(state.memeList).map(memeId => {
        let meme = state.memeList[memeId].quote;
        let url = state.memeList[memeId].url;
        return (
          <div>
            <img src={url}></img>
            <p key={memeId}>{meme}</p>
          </div>
        );
      })}
    </div>
  );
};

MemeList.propTypes = {
  memeList: PropTypes.array
};

const mapStateToProps = state => {
  return {
    memeList: state
  };
};

export default connect(mapStateToProps)(MemeList);
