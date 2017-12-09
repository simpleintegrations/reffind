
import React from 'react';
import ReactDOM from 'react-dom';
import Search from './search';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<Search />, div);
});

it('accepts the correct props', () => {
  const div = document.createElement('div');
  const props = {
    query: 'monkey wrench',
    onSearch: (query) => {
      
    },
    onClear: () => {
      
    },
  }
  ReactDOM.render(<Search {...props} />, div);
});
