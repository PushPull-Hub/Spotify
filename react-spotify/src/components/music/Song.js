import React from 'react';

const Song = (prop) => {
  const { song } = prop;
  if (song) {
    return (
      <div className='col-md-6'>
        <div className='card mb-4 shadow-sm'>
          <div className='card-body'>
            <h5>{song.track_name}</h5>
            <p className='card-text'>
              <strong>
                <i className='fas fa-play' /> Artist
              </strong>
              : {song.artist}
              <br />
              <strong>
                <i className='fas fa-compact-disc' /> Published
              </strong>
              : {song.publishedThe}
            </p>
          </div>
        </div>
      </div>
    );
  } else {
    /* spinner */
  }
};

export default Song;
