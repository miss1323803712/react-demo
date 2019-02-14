import { combineReducers, createStore, applyMiddleware } from 'redux'
import Number from './reducer'
import thunkMiddleware from 'redux-thunk'

let store = createStore(
  combineReducers({Number}),
  applyMiddleware(thunkMiddleware)
)
// 打印初始状态
// console.log(store.getState())
// 注意 subscribe() 返回一个函数用来注销监听器
const unsubscribe = store.subscribe(() =>
  console.log(store.getState())
)
export default store