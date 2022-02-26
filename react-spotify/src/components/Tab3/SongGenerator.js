import React, { useState } from 'react';

const SongGenerator = () => {
  const [trackName, setTrackName] = useState('');
  const [selectedArtist, setSelectedArtist] = useState('artist');

  return (
    <>
      <form>
        <fieldset>
          <legend>
            May This part of the app isn't performing a logical functions on the
            app, but just for learning purposes we could tolerate it existence{' '}
          </legend>
          <div className='mb-3'>
            <label htmlFor='trackName' className='form-label'>
              Track Name
            </label>
            <input
              id='trackName'
              value={trackName}
              type='text'
              className='form-control'
              placeholder='set trackName... '
              onChange={(e) => setTrackName(e.target.value)}
            />
          </div>
          <div className='mb-3'>
            <label htmlFor='artist' className='form-label'>
              Artist
            </label>
            <select
              id='artist'
              value={selectedArtist}
              onChange={setSelectedArtist}
              className='form-control'
            >
              <option value='artist'>You</option>
              <option value='artist'>You in the shower</option>
              <option value='artist'>Michel Jackson</option>
              <option value='artist'>You together with Michel Jackson</option>
            </select>
          </div>
          <button type='submit' className='btn btn-primary'>
            Submit
          </button>
        </fieldset>
      </form>
    </>
  );
};

export default SongGenerator;
