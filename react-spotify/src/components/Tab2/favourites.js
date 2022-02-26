import React from 'react';

import { Consumer } from '../../store/Context';
import Song from '../Tab1/Song';

function Favourites({ removeFromFavourites }) {
  const removeFromList = (songId) => {
    removeFromFavourites(songId);
  };

  return (
    <Consumer>
      {(state) => {
        if (state && state.songsList) {
          const favSongs = state.songsList.filter((song) => !!song.isOneOfFav);
          return (
            <div className='row p-3 '>
              {favSongs.map((song) => (
                <Song
                  key={song.id}
                  song={song}
                  changeSongStatue={removeFromList}
                />
              ))}
            </div>
          );
        }
      }}
    </Consumer>
  );
}
export default Favourites;
