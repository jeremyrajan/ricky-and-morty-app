/* eslint-disable react-hooks/exhaustive-deps */
import React, { useState, useEffect } from 'react';
import List from '../../components/List';
import axios from 'axios';

const HomePage = () => {
  const [data, setData] = useState({characters: [], episodes: {}, info: {}});

  useEffect(_ => {
    const fetchData = async _ => {
      const {data: {characters, episodes, info}} = await axios('https://ricky-and-morty-api.now.sh/characters');
      setData({characters, episodes, info});
    }

    fetchData();
  }, [])

  return (
    <div className="home">
      <List characters={data.characters} episodes={data.episodes} />
    </div>
  )
}

export default HomePage;