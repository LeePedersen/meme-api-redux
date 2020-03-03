import React from 'react';
import './App.css';
// Components
import SearchInput from './components/SearchInput'
import PictureList from './components/MemeList'

function App() {
  return (
    <div>
      <SearchInput/>
      <PictureList/>
    </div>
  );
}

export default App;
