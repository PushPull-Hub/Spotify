import React, { Component } from 'react';
import { crudMethods } from './MockUpData';

export const Context = React.createContext();

export class Provider extends Component {
  constructor(props) {
    super(props);
    this.updateState = this.updateState.bind(this);
  }

  componentDidMount() {
    crudMethods
      .getSongs()
      .then((songs) =>
        songs ? this.setState(() => this.createDefaultState(songs)) : null
      )
      .catch((error) => alert(error));
  }

  createDefaultState(songs) {
    return {
      songsList: songs,
      tabs: [
        {
          title: 'Songs',
          theme: ' bg-success',
          itsPage: '/',
          component: 'SongList',
        },

        {
          title: 'Favorites',
          theme: ' bg-danger',
          itsPage: '/favourites',
          component: 'Favourites',
        },

        {
          title: 'Generator',
          theme: ' bg-info',
          itsPage: '/songGenerator',
          component: 'SongGenerator',
        },
      ],
      selectedTab: {
        title: 'Songs',
        theme: 'bg-success',
        component: 'SongList',
      },
      updateState: this.updateState,
    };
  }

  updateState(newState) {
    this.setState(newState);
  }

  render() {
    return (
      <Context.Provider value={this.state}>
        {this.props.children}
      </Context.Provider>
    );
  }
}

export const Consumer = Context.Consumer;
