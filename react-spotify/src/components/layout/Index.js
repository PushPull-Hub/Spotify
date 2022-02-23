import React, { useContext } from 'react';
import { Switch, Route } from 'react-router-dom';
import SongList from '../music/SongList';
import Favourites from '../favourites/favourites';
import SongGenerator from '../generator/SongGenerator';
import { Context } from '../../store/Context';
import Navbar from '../layout/Navbar';

const Index = () => {
  const state = useContext(Context);

  const setToActive = (tab) => {
    state.updateState({ selectedTab: tab });
  };

  const changeSongBelonging = (songId) => {
    const newSongsList = [...state.songsList];
    let theTargettedSong = newSongsList.find((song) => song.id === songId);
    theTargettedSong.isOneOfFav = !theTargettedSong.isOneOfFav;
    state.updateState({ songsList: newSongsList });
  };

  if (state && state.tabs) {
    const tabs = state.tabs;
    return (
      <React.Fragment>
        <Navbar tabs={tabs} setToActive={setToActive} />
        <div className={'container ' + state.selectedTab.theme}>
          <h1 className='text-center mb-4'>{state.selectedTab.title}</h1>
          <Switch>
            <Route
              exact
              path='/'
              render={(props) => (
                <SongList addToFavourites={changeSongBelonging} />
              )}
            ></Route>
            <Route
              exact
              path='/favourites'
              render={(props) => (
                <Favourites removeFromFavourites={changeSongBelonging} />
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
