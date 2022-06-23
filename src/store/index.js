import { applyMiddleware, createStore } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import thunk from 'redux-thunk';
import rootReducer from './reducers/root';

// Создаём store при помощи импортированной функции,
// в которую в качестве аргумента передаём редюсеры
const store = createStore(rootReducer, composeWithDevTools(applyMiddleware(thunk)))

export default store
