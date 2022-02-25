import React, { Component } from 'react';
import { SongApi, ConfigurationsApi } from '../components/helper/Apis';

export const Context = React.createContext();

export class Provider extends Component {
  constructor(props) {
    super(props);
    this.updateState = this.updateState.bind(this);
  }

  componentDidMount() {
    this.initializeState()
      .then((state) => this.setState(state))
      .catch((error) => console.error(error));
  }

  async initializeState() {
    return new Promise(async (resolve) => {
      try {
        const songsList = await this.getSongsPromise();
        const configs = await this.getConfigurationsPromise();
        const updateState = this.updateState;
        resolve({ songsList, configs, updateState });
      } catch (error) {
        console.error(error);
        resolve(null);
      }
    });
  }

  getSongsPromise() {
    return new Promise(async (resolve) => {
      try {
        const songApi = new SongApi();
        const response = await songApi.getSongList();
        response && response.data ? resolve(response.data) : resolve(null);
      } catch (error) {
        console.error(error);
        resolve(null);
      }
    });
  }

  getConfigurationsPromise() {
    return new Promise(async (resolve) => {
      try {
        const configsApi = new ConfigurationsApi();
        const response = await configsApi.getAppConfigurations();
        response && response.data ? resolve(response.data) : resolve(null);
      } catch (error) {
        console.error(error);
        resolve(null);
      }
    });
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
