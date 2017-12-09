import React from 'react';
import ReactDOM from 'react-dom';
import Instructions from './instructions';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<Instructions />, div);
});
