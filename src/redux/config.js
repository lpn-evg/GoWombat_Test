import { createStore, } from 'redux';
import rootReducers from './reducers';

const configureStore = createStore(rootReducers);

export default configureStore;