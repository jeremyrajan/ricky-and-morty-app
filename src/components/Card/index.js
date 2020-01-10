import React, { useState } from 'react';
import Modal from '../Modal';

import './style.scss';

const Card = ({ character, episodes }) => {
  const [isOpen, setIsOpen] = useState(false);
  const characterEpisodes = character.episodes.map(episodeId => episodes[episodeId]);

  return (
    <div className="card">
      <img src={character.image} alt={character.name} />
      <div className="card-info">
        <span className="card-info-title">Name</span>
        <span className="card-info-content">{character.name}</span>
      </div>
      <div className="card-info">
        <span className="card-info-title">Status</span>
        <span className="card-info-content">{character.status}</span>
      </div>
      <div className="card-info">
        <span className="card-info-title">Species</span>
        <span className="card-info-content">{character.species}</span>
      </div>
      <div className="card-info">
        <span className="card-info-title">Gender</span>
        <span className="card-info-content">{character.gender}</span>
      </div>
      <div className="card-info">
        <span className="card-info-title">Origin</span>
        <span className="card-info-content">{character.origin.name}</span>
      </div>
      <div className="card-info">
        <span className="card-info-title">Location</span>
        <span className="card-info-content">{character.location.name}</span>
      </div>
      <div className="card-info">
        <span className="card-info-title">Episodes</span>
        <span className="card-info-content">
          <span className="card-info-link" onClick={_ => setIsOpen(true)}>Show Episodes</span>
          <Modal isOpen={isOpen} onClose={_ => setIsOpen(false)}>
            <h2>Episode(s)</h2>
            {characterEpisodes.map(episode => <p key={episode.id}>#{episode.id}. {episode.name}</p>)}
          </Modal>
        </span>
      </div>
      <div className="card-info">
        <span className="card-info-title">Created</span>
        <span className="card-info-content">{character.created}</span>
      </div>
    </div>
  );
}

export default Card;