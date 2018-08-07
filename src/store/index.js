import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import rootReducer from './reducers';

const state = {
  links: []
}

export default function configureStore(initialState = state) {
  return createStore(
    rootReducer,
    initialState,
    applyMiddleware(thunk)
  );
}
