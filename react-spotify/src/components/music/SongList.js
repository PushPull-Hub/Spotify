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
              <div className='row p-3 '>
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
