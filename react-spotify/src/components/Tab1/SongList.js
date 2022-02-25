import React from 'react';
import { Consumer } from '../../store/Context';
import Song from './Song';

const SongList = ({ addToFavourites }) => {
  const removeFromList = (songId) => {
    addToFavourites(songId);
  };

  return (
    <Consumer>
      {(state) => {
        if (state && state.songList) {
          const songs = state.songList.filter((song) => !song.isOneOfFav);
          return (
            <>
              <div className='row p-3 '>
                {songs.map((song) => (
                  <Song
                    key={song.id}
                    song={song}
                    changeSongStatue={removeFromList}
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
