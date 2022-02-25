import React, { useContext } from 'react';
import { Switch, Route } from 'react-router-dom';

import Navbar from '../navbar/Navbar';
import SongList from '../../Tab1/SongList';
import Favourites from '../../Tab2/favourites';
import SongGenerator from '../../Tab3/SongGenerator';
import { Context } from '../../../store/Context';

const Index = () => {
  const state = useContext(Context);

  const setToActive = (tab) => {
    const newState = { ...state };
    newState.configs.homepage.activeTab = tab;
    state.updateState(newState);
  };

  const changeSongStatus = (songId) => {
    const newSongsList = [...state.songsList];
    let theTargettedSong = newSongsList.find((song) => song.id === songId);
    theTargettedSong.isOneOfFav = !theTargettedSong.isOneOfFav;
    state.updateState({ songsList: newSongsList });
  };

  if (state && state.configs) {
    const tabs = state.configs.homepage.tabs;
    const activeTab = state.configs.homepage.activeTab;
    return (
      <React.Fragment>
        <Navbar tabs={tabs} setToActive={setToActive} />
        <div className={'container d-flex flex-column  bg-' + activeTab.theme}>
          <h1 className='text-center m-3 text-light'>{activeTab.title}</h1>
          <Switch>
            <Route
              exact
              path='/'
              render={(props) => (
                <SongList addToFavourites={changeSongStatus} />
              )}
            ></Route>
            <Route
              exact
              path='/favourites'
              render={(props) => (
                <Favourites removeFromFavourites={changeSongStatus} />
              )}
            ></Route>
            <Route
              exact
              path='/songGenerator'
              component={SongGenerator}
            ></Route>
          </Switch>
        </div>
      </React.Fragment>
    );
  } else {
    return null;
  }
};

export default Index;
