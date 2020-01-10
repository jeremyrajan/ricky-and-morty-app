import React from 'react';
import Card from '../Card';
import './style.scss';

const List = ({ characters, episodes }) => {
  const cards = characters.map(character => <Card key={character.id} character={character} episodes={episodes} />);
  return (
    <div className="list">{cards}</div>
  )
}

export default List;