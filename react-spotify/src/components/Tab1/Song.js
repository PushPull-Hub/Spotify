import React from 'react';

function Song({ song, changeSongStatue }) {
  const handleHeartIconClick = (id) => {
    changeSongStatue(id);
  };

  if (song) {
    return (
      <div className='col-md-6'>
        <div className='card mb-4 shadow-sm'>
          <div className='card-body'>
            <div className='d-flex justify-content-between'>
              <h5>{song.track_name}</h5>
              <button
                type='button'
                className='btn '
                onClick={() => handleHeartIconClick(song.id)}
              >
                <strong>
                  <i
                    className='fas fa-heart'
                    style={{ color: song.isOneOfFav ? 'red' : 'black' }}
                  />
                </strong>
              </button>
            </div>

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
}

export default Song;
