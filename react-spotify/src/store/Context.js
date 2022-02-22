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
    console.log(songs);
    return {
      songsList: songs,
      extraThing: '',
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
