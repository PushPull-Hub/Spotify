import React, { Component } from 'react';
import crudMethods from './MockUpData';

export const Context = React.createContext();

export class Provider extends Component {
  componentDidMount() {
    crudMethods
      .getSongs()
      .then((songs) =>
        songs ? this.setState(() => this.createStateObject(songs)) : null
      )
      .catch((error) => alert(error));
  }

  createStateObject(songs) {
    return {
      songsList: songs,
      extraThing: '',
      selectedTab: {
        title: 'Songs',
        theme: 'bg-success',
      },
    };
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
