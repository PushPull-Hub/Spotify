import React, { useContext } from 'react';
import { Switch, Route } from 'react-router-dom';

import Navbar from '../navbar/Navbar';
import SongList from '../../Tab1/SongsList';
import SongGenerator from '../../Tab3/SongGenerator';
import { Context } from '../../../store/Context';

function Index() {
  const state = useContext(Context);
  const songsList = [];
  const favoritesList = [];

  const setToActive = (tab) => {
    const newState = { ...state };
    newState.configs.homepage.activeTab = tab;
    state.updateState(newState);
  };

  const changeSongStatus = (songId) => {
    const newSongsList = state.songsList.map((song) =>
      song.id === songId ? (song.isOneOfFav = !song.isOneOfFav) : song
    );
    state.updateState({ songsList: newSongsList });
  };

  if (!state || !state.configs) {
    return null;
  }

  const tabs = state.configs.homepage.tabs;
  const activeTab = state.configs.homepage.activeTab;
  state.songsList.forEach((song) => {
    !!song.isOneOfFav ? favoritesList.push(song) : songsList.push(song);
  });

  return (
    <>
      <Navbar tabs={tabs} setToActive={setToActive} />
      <div className={'container d-flex flex-column  bg-' + activeTab.theme}>
        <h1 className='text-center m-3 text-light'>{activeTab.title}</h1>
        <Switch>
          <Route exact path='/'>
            <SongList changeSongStatue={changeSongStatus} list={songsList} />
          </Route>
          <Route path='/favourites'>
            <SongList
              changeSongStatue={changeSongStatus}
              list={favoritesList}
            />
          </Route>
          <Route path='/songGenerator'>
            <SongGenerator />
          </Route>
        </Switch>
      </div>
    </>
  );
}

export default Index;
