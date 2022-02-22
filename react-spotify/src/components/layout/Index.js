import React from 'react';
import SongList from '../music/SongList';
import SongGenerator from '../generator/SongGenerator';

const Index = () => {
  return (
    <React.Fragment>
      <SongGenerator />
      <SongList />
    </React.Fragment>
  );
};

export default Index;
