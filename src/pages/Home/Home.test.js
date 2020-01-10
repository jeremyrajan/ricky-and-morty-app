/**
 * @jest-environment jsdom
 */

import React from 'react';
import { render } from '@testing-library/react';
import { act } from 'react-dom/test-utils';
import HomePage from '../../pages/Home';

const mockData = {
  characters: [{ "id": 1, "name": "Rick Sanchez", "status": "Alive", "species": "Human", "type": "", "gender": "Male", "origin": { "name": "Earth (C-137)", "url": "https://rickandmortyapi.com/api/location/1" }, "location": { "name": "Earth (Replacement Dimension)", "url": "https://rickandmortyapi.com/api/location/20" }, "image": "https://rickandmortyapi.com/api/character/avatar/1.jpeg", "url": "https://rickandmortyapi.com/api/character/1", "created": "2017-11-04T18:48:46.250Z", "episodes": [1] }],
  episodes: {
    1: {
      name: "test",
      id: 1
    }
  }
}

jest.mock('axios', _ => {
  return function DummyAxios() {
    return Promise.resolve({
      data: mockData
    })
  }
})

let container;
let reactDom;

beforeEach(() => {
  container = document.createElement('div');
  document.body.appendChild(container);
})

afterEach(() => {
  document.body.removeChild(container);
  container = null;
})

test('finds rick sanchez in the list of items', async () => {
  await act(async _ => {
    reactDom = render(<HomePage />, container);
  })
  const rickSanchez = reactDom.getByText(/Rick Sanchez/i);
  expect(rickSanchez).toBeInTheDocument();
});

test('should have rendered 1 item', async () => {
  await act(async _ => {
    reactDom = render(<HomePage />, container);
  })

  const cards = reactDom.container.querySelectorAll('.card');
  expect(cards.length).toBe(1)
});
