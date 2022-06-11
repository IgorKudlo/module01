import React from 'react';
import SearchBar from '../components/SearchBar';
import CardsList from '../components/CardsList';

const Home = () => {
  return (
    <div>
      <h1>Home</h1>
      <SearchBar />
      <CardsList />
    </div>
  );
};

export default Home;
