import React from 'react';
import ReactDOM from 'react-dom';

import './index.css';
import * as serviceWorker from './serviceWorker';

import Routers from './Components/Routers/router';

import CreateStore from './Store';
import {Provider} from 'react-redux';

var storage = CreateStore();


ReactDOM.render(
<Provider store={storage}>
    <Routers />
</Provider>
, document.getElementById('root'));

serviceWorker.unregister();
