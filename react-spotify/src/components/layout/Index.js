import React from 'react';
import SongList from '../music/SongList';
import SongGenerator from '../generator/SongGenerator';
import { Tabs, Tab } from './Tabs';

const Index = () => {
  return (
    <React.Fragment>
      <h1 className='text-center mb-4'>songs</h1>
      <Tabs>
        <Tab label='Tab 1'></Tab>
        <Tab label='Tab 1'></Tab>
        <Tab label='Tab 1'></Tab>
      </Tabs>
      <SongGenerator />
      <SongList />
    </React.Fragment>
  );
};

export default Index;
