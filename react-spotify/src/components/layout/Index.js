import React, { useContext } from 'react';
import { Switch, Route } from 'react-router-dom';
import SongList from '../music/SongList';
import favourites from '../favourites/favourites';
import SongGenerator from '../generator/SongGenerator';
import { Context } from '../../store/Context';

const Index = () => {
  const state = useContext(Context);
  return (
    <React.Fragment>
      <div className='container'>
        <h1 className='text-center mb-4'>
          {state ? state.selectedTab.title : 'Loading'}
        </h1>
        <Switch>
          <Route exact path='/' component={SongList}></Route>
          <Route exact path='/favs' component={favourites}></Route>
          <Route exact path='/generator' component={SongGenerator}></Route>
        </Switch>
      </div>
    </React.Fragment>
  );
};

export default Index;
