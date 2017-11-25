import React from 'react';
import ReactDOM from 'react-dom';
import RedBox from 'redbox-react';
import Calculator from './components/Calculator.jsx';

const main = document.getElementById('main');

try {
  ReactDOM.render(
    <Calculator />,
    main,
  );
} catch (e) {
  ReactDOM.render(
    <RedBox error={e} />,
    main,
  );
}
