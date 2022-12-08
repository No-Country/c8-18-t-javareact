import React from 'react';
import ReactDOM from 'react-dom/client';
import { ApolloClient, InMemoryCache, ApolloProvider } from '@apollo/client';

import { BrowserRouter } from 'react-router-dom';
import App from './App';
import './index.css';

import 'react-responsive-carousel/lib/styles/carousel.min.css'; // requires a loader

const client = new ApolloClient({
  uri: import.meta.env.VITE_SOME_KEY,
  cache: new InMemoryCache(),
});

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ApolloProvider client={client}>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </ApolloProvider>
  </React.StrictMode>,
);
