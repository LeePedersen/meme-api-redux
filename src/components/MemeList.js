import React from 'react';
// import Meme from './Meme';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

const MemeList = ({ dispatch, memeList }) => {
  return(
    <div>
      <h4>Memes</h4>
      {Object.keys(memeList).map(memeId => {
        let meme = memeList[memeId];
        return <p key = {memeId}>{meme}</p>
      })}
    </div>
  )
}

MemeList.propTypes = {
  memeList: PropTypes.object,
  dispatch: PropTypes.func
};

// const mapStateToProps = state => {
//   return {
//     songList: state.songsById
//   };
// };

// export default connect(mapStateToProps)(SongList);

