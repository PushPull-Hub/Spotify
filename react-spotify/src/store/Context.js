import React, { useEffect, useState } from 'react';
import { SongApi, ConfigurationsApi } from '../components/helper/Apis';

export const Context = React.createContext();

export function Provider({ children }) {
  const [state, setState] = useState();

  useEffect(() => {
    initializeState();
  }, []);

  const initializeState = async () => {
    const songsList = await getSongsList();
    const configs = await getConfigurations();
    setState({ songsList, configs, updateState });
  };

  const getSongsList = async () => {
    const songApi = new SongApi();
    const response = await songApi.getSongList();
    return response?.data;
  };

  const getConfigurations = async () => {
    const configsApi = new ConfigurationsApi();
    const response = await configsApi.getAppConfigurations();
    return response?.data;
  };

  const updateState = (newState) => {
    setState((state) => ({ ...state, newState }));
  };

  return <Context.Provider value={state}>{children}</Context.Provider>;
}

export const Consumer = Context.Consumer;
