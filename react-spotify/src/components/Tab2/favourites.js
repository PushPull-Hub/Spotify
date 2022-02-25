import React from 'react';
import { Consumer } from '../../store/Context';
import Song from '../Tab1/Song';
const Favourites = ({ removeFromFavourites }) => {
  function removeFromList(songId) {
    removeFromFavourites(songId);
  }

  return (
    <Consumer>
      {(state) => {
        console.log(state);
        if (state && state.songList) {
          const favSongs = state.songList.filter((song) => !!song.isOneOfFav);
          return (
            <>
              <div className='row p-3 '>
                {favSongs.map((song) => (
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
export default Favourites;
