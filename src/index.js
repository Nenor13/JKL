import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import './Appearence.css';
import './Start.css';
import Appeareance from'./Appearence';
import ToggleGroup from './ToggleGroup';
import Start from './Start';

const root = ReactDOM.createRoot(document.getElementById('root'));


root.render(
  <>
    <Appeareance />
    <ToggleGroup />
    <Start />
  </>
);