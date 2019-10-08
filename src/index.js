import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';

import App from './containers/App';
import store from './store';
import ErrorBoundary from'./containers/errorBoundary';
import ImageCheckService from './services/ImageCheckService';
import { ImageCheckServiceProvider } from './contexts/imageCheckServiceContext';

const imageCheckService = new ImageCheckService();

render(
    <Provider store={store}>
      <ErrorBoundary>
        <ImageCheckServiceProvider value={imageCheckService}>
          <App />
        </ImageCheckServiceProvider>
      </ErrorBoundary>
    </Provider>,
    document.getElementById('root'),
);