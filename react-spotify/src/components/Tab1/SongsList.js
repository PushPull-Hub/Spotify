import React from 'react';
import { Consumer } from '../../store/Context';
import Song from './Song';

function SongsList({ addToFavourites }) {
  const removeFromList = (songId) => {
    addToFavourites(songId);
  };

  return (
    <Consumer>
      {(state) => {
        if (state && state.songsList) {
          const songs = state.songsList.filter((song) => !song.isOneOfFav);
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
}

export default SongsList;
