import React from 'react';
import Music from '../music/Music';
import SongGenerator from '../generator/SongGenerator'

const Index = () => {
  return (
    <React.Fragment>
        <SongGenerator/>
        <Music />
    </React.Fragment>
  )
}

export default Index