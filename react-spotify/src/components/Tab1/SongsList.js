import React from 'react';
import Song from './Song';

function SongsList({ changeSongStatue, list }) {
  if (!list) {
    return null;
  }
  return (
    <div className='row p-3 '>
      {list.map((song) => (
        <Song key={song.id} song={song} changeSongStatue={changeSongStatue} />
      ))}
    </div>
  );
}

export default SongsList;
