import { createStore,applyMiddleware } from 'redux'
import counter from '../reducers'
import { loggerMiddleWare,counterMiddleware} from '../customMiddleware'

const store = createStore(counter, applyMiddleware(loggerMiddleWare, counterMiddleware));

export default store