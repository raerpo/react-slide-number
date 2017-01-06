import React from 'react';
import ReactDOM from 'react-dom';
import Board from './components/board/board';

import './index.css';

ReactDOM.render(
  <Board size={9} />,
  document.getElementById('root')
);
