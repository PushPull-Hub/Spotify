import React from 'react';
import { Consumer } from '../../store/Context';
import Song from './Song';

const SongList = ({ addToFavourites }) => {
  const removeFromList = (songId) => {
    addToFavourites(songId);
  };

  return (
    <Consumer>
      {(value) => {
        if (value) {
          const songs = value.songsList.filter((song) => !song.isOneOfFav);
          return (
            <>
              <div className='row p-3 '>
                {songs.map((song) => (
                  <Song
                    key={song.id}
                    song={song}
                    handleHeartIconClick={removeFromList}
                  />
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
