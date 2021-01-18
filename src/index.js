import React from 'react';
import ReactDOM from 'react-dom';
import { createStore } from 'redux';
import { Provider } from 'react-redux';

import './index.scss';
import App from './App';
import reportWebVitals from './reportWebVitals';
import axios from 'axios';
import reducer from './store/reducer';

const store = createStore(reducer);

axios.defaults.baseURL = 'https://api.thecatapi.com';

ReactDOM.render(
		<Provider store={store}>
			<App />
		</Provider>,
	document.getElementById('root'),
);

reportWebVitals();
