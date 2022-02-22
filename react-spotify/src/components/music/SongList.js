import React from 'react';
import { Consumer } from '../../store/Context';
import Song from './Song';

const SongList = () => {
  return (
    <Consumer>
      {(value) => {
        if (value) {
          return (
            <>
              <h3 className='text-center mb-4'>songs</h3>
              <div className='row'>
                {value.songsList.map((song) => (
                  <Song key={song.id} song={song} />
                ))}
              </div>
            </>
          );
        }
      }}
    </Consumer>
  );
};

export default SongList;
