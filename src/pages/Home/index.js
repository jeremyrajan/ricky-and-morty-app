/* eslint-disable react-hooks/exhaustive-deps */
import React, { useState, useEffect } from 'react';
import List from '../../components/List';
import axios from 'axios';

import './style.scss';

const HomePage = () => {
  const [data, setData] = useState({ characters: [], episodes: {}, info: {} });

  const fetchData = async (page = 1) => {
    page = page < 1 ? 1 : page;
    const { data: { characters, episodes, info } } = await axios(`https://ricky-and-morty-api.now.sh/characters?page=${page}`);
    setData({ characters, episodes, info, currentPage: page });
  }

  useEffect(_ => {
    fetchData();
  }, [])

  return (
    <div className="home">
      <div className="ops prev-page" onClick={_ => fetchData(data.currentPage - 1)}>Previous</div>
      <List characters={data.characters} episodes={data.episodes} />
      <div className="ops next-page" onClick={_ => fetchData(data.currentPage + 1)}>Next</div>
    </div>
  )
}

export default HomePage;