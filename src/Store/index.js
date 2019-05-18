import {createStore, applyMiddleware} from 'redux';
import rootReducer from './ReducerEntry';
import 'bootstrap/dist/css/bootstrap.min.css';

import logger from 'redux-logger';
import thunk from 'redux-thunk';

export default function CreateStore(initState) {
    const store = createStore(
        rootReducer,
        initState,
        applyMiddleware(thunk, logger)
    )

    if (module.hot){
        module.hot.accept('./ReducerEntry', () => {
            const nextRootReducer = require('./ReducerEntry')
            store.replaceReducer(nextRootReducer)
        })
    }

    return store
}