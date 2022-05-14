import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';




const isLoading = true

ReactDOM.render(
  <React.StrictMode>
    <App isLoading={isLoading} />
  </React.StrictMode>,
  document.getElementById('root')
);


