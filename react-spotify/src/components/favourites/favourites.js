import React from 'react';
import { Consumer } from '../../store/Context';
import Song from '../music/Song';
const Favourites = ({ removeFromFavourites }) => {
  function removeFromList(songId) {
    removeFromFavourites(songId);
  }

  return (
    <Consumer>
      {(value) => {
        if (value) {
          const favSongs = value.songsList.filter((song) => !!song.isOneOfFav);
          return (
            <>
              <div className='row p-3 '>
                {favSongs.map((song) => (
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

export default Favourites;
