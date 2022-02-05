import * as redux from 'redux';
import TrainerReducer from './reducers/TrainerReducer';
import thunk from 'redux-thunk';

const configureStore = () => {
  const middlewares = [thunk];
  const enhancers = redux.compose(redux.applyMiddleware(...middlewares));
  const reducers = redux.combineReducers({
    trainers: TrainerReducer,
  });

  const store = redux.createStore(reducers, enhancers);

  return store;
};

export default configureStore;
