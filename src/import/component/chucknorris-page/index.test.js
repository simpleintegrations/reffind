import React from 'react';
import ReactDOM from 'react-dom';
import ChuckNorrisPage from './index';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<ChuckNorrisPage />, div);
});
