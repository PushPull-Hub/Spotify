import React, { useContext } from 'react';
import { Route, Switch } from 'react-router-dom';

import { Context } from '../../../store/Context';
import SongList from '../../Tab1/SongsList';
import Favourites from '../../Tab2/Favourites';
import SongGenerator from '../../Tab3/SongGenerator';
import Navbar from '../navbar/Navbar';

function Index() {
  const state = useContext(Context);

  const setToActive = (tab) => {
    const newState = { ...state };
    newState.configs.homepage.activeTab = tab;
    state.updateState(newState);
  };

  const changeSongStatus = (songId) => {
    const newSongsList = [...state.songsList];
    const theTargettedSong = newSongsList.find((song) => song.id === songId);
    theTargettedSong.isOneOfFav = !theTargettedSong.isOneOfFav;
    state.updateState({ songsList: newSongsList });
  };

  if (state && state.configs) {
    const { tabs } = state.configs.homepage;
    const { activeTab } = state.configs.homepage;
    return (
      <>
        <Navbar tabs={tabs} setToActive={setToActive} />
        <div className={`container d-flex flex-column  bg-${activeTab.theme}`}>
          <h1 className='text-center m-3 text-light'>{activeTab.title}</h1>
          <Switch>
            <Route
              exact
              path='/'
              render={(props) => (
                <SongList addToFavourites={changeSongStatus} />
              )}
            />
            <Route
              exact
              path='/favourites'
              render={(props) => (
                <Favourites removeFromFavourites={changeSongStatus} />
              )}
            />
            <Route exact path='/songGenerator' component={SongGenerator} />
          </Switch>
        </div>
      </>
    );
  }
  return null;
}

export default Index;
