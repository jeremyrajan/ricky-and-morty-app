import React from 'react';

import './style.scss';

const Card = ({ character, episodes }) => {
  return (
    <div className="card">
      <img src={character.image} alt={character.name} />
      <p className="card-info">
        <span className="card-info-title">Name</span>
        <span className="card-info-content">{character.name}</span>
      </p>
      <p className="card-info">
        <span className="card-info-title">Status</span>
        <span className="card-info-content">{character.status}</span>
      </p>
      <p className="card-info">
        <span className="card-info-title">Species</span>
        <span className="card-info-content">{character.species}</span>
      </p>
      <p className="card-info">
        <span className="card-info-title">Gender</span>
        <span className="card-info-content">{character.gender}</span>
      </p>
      <p className="card-info">
        <span className="card-info-title">Origin</span>
        <span className="card-info-content">{character.origin.name}</span>
      </p>
      <p className="card-info">
        <span className="card-info-title">Location</span>
        <span className="card-info-content">{character.location.name}</span>
      </p>
      <p className="card-info">
        <span className="card-info-title">Created</span>
        <span className="card-info-content">{character.created}</span>
      </p>
    </div>
  );
}

export default Card;