import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import {Auth0Provider} from '@auth0/auth0-react'

const domain:string=process.env.REACT_APP_AUTH0_DOMAIN!;
const clientId:string=process.env.REACT_APP_AUTH0_CLIENT_ID!;
const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
    <Auth0Provider
    domain={domain}
    clientId={clientId}
    redirectUri={window.location.origin}
  >
    <App />
  </Auth0Provider> 
      
  
    
  
);


reportWebVitals();
