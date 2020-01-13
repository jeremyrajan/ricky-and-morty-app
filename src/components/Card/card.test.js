/**
 * @jest-environment jsdom
 */

import React from 'react';
import { render } from '@testing-library/react';
import { act } from 'react-dom/test-utils';
import { unmountComponentAtNode } from "react-dom";

import Card from '.';

// stub data
const character = {
  "id": 1,
  "name": "Rick Sanchez",
  "status": "Alive",
  "species": "Human",
  "type": "",
  "gender": "Male",
  "origin": { "name": "Earth (C-137)", "url": "https://rickandmortyapi.com/api/location/1" },
  "location": { "name": "Earth (Replacement Dimension)", "url": "https://rickandmortyapi.com/api/location/20" },
  "image": "https://rickandmortyapi.com/api/character/avatar/1.jpeg",
  "url": "https://rickandmortyapi.com/api/character/1",
  "created": "2017-11-04T18:48:46.250Z",
  "episodes": [1]
};
const episodes = {
  1: {
    name: "test episode",
    id: 1
  }
}

let container;
let reactDom;

beforeEach(async () => {
  container = document.createElement('div');
  document.body.appendChild(container);

  await act(async _ => {
    reactDom = render(<Card character={character} episodes={episodes} />, container);
  })
})

afterEach(() => {
  unmountComponentAtNode(container);
  document.body.removeChild(container);
  container = null;
})

test('should render the card as per the data', () => {
  const name = reactDom.getByText(/Rick Sanchez/i);
  expect(name).toBeInTheDocument();

  const status = reactDom.getByText(/Alive/i);
  expect(status).toBeInTheDocument();

  const species = reactDom.getByText(/Human/i);
  expect(species).toBeInTheDocument();

  const gender = reactDom.getByText(/Male/i);
  expect(gender).toBeInTheDocument();

  const origin = reactDom.getByText(/C-137/i);
  expect(origin).toBeInTheDocument();

  const location = reactDom.getByText(/Replacement Dimension/i);
  expect(location).toBeInTheDocument();

  const created = reactDom.getByText(/2017-11-04T18:48:46.250Z/i);
  expect(created).toBeInTheDocument();
});

test('clicking the episode link should show dialog with all the episodes', () => {
  const episodeLink = reactDom.container.querySelector('.card-info-link');
  expect(episodeLink).toBeDefined();

  act(_ => {
    episodeLink.dispatchEvent(new MouseEvent("click", { bubbles: true }));
  });

  const modal = reactDom.container.querySelector('.modal');
  expect(modal).toBeDefined();
  expect(modal.style._values).toHaveProperty('display', 'block'); // is visible

  const episodes = reactDom.getByText(/test episode/i);
  expect(episodes).toBeInTheDocument();
})
