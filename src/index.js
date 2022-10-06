//Import to use other files in the script.
import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './containers/App';
import reportWebVitals from './reportWebVitals';
import 'tachyons'; //importing package tachyons
 //use {} to destructer and choose which export to import from another file in this case our robots.js


//ReactDOM.render(<Hello />, document.getElementById('root'));

const root = ReactDOM.createRoot(document.getElementById('root'));
  root.render(
    <React.StrictMode>
      <App />
    </React.StrictMode>
); //Calling hello.js to display on website.

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
