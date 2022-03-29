//инициализируем store приложения
import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import { rootReducer } from './reducers';

//перв парметр - редьюсер, второй - middleWare
export const store = createStore(rootReducer, applyMiddleware(thunk));