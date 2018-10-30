import axios from 'axios';
import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import setUser from 'Utility/setUser';
import 'normalize.css/normalize.css';
import App from './App';
import './assets/styles/base.scss';
import store from './store';


axios.defaults.baseURL = 'https://ride-my-way-api.herokuapp.com/api/v1/';
axios.defaults.headers.common['Access-Control-Allow-Origin'] = '*';
setUser(store);

render(<Provider store={store}><App /></Provider>, document.getElementById('root'));
