import React from 'react';
import ReactDOM from 'react-dom';
import ButtonTile from './index';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<ButtonTile />, div);
});
