import React from 'react';

//version react >= 10
import ReactDOM from 'react-dom/client';
import './index.css';

import Stateless from './component/stateless';
import Statefull from './component/statefull';

import reportWebVitals from './reportWebVitals';


//version >= 18

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Stateless />
  </React.StrictMode>
);


// version <= 18
//ReactDOM.render(<Stateless />,document.getElementById('root'));



// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
