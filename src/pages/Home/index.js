/* eslint-disable react-hooks/exhaustive-deps */
import React, { useState, useEffect, useLayoutEffect } from 'react';
import List from '../../components/List';
import Loader from '../../components/Loader';
import axios from 'axios';

import './style.scss';

const HomePage = () => {
  const [data, setData] = useState({ characters: [], episodes: {}, info: {} });
  const [loading, showLoader] = useState(false);

  const fetchData = async (page = 1) => {
    showLoader(true);
    page = page < 1 ? 1 : page;
    const { data: { characters, episodes, info } } = await axios(`https://ricky-and-morty-api.now.sh/characters?page=${page}`);
    setData({ characters, episodes, info, currentPage: page });
    showLoader(false);
  }

  useEffect(_ => {
    fetchData();
  }, [])

  useLayoutEffect(_ => {
    window.scrollTo(0, 0);
  })

  return (
    <div className="home">
      <h1>The Ricky And Morty App</h1>
      <h2>Hey, Did you ever want to hold a terry fold?</h2>
      <div className="ops prev-page" onClick={_ => fetchData(data.currentPage - 1)}>Previous</div>
      {loading ? <Loader /> : <List characters={data.characters} episodes={data.episodes} />}
      <div className="ops next-page" onClick={_ => fetchData(data.currentPage + 1)}>Next</div>
    </div>
  )
}

export default HomePage;