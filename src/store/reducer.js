import { INCREASE,DECREASE, ODDADD } from './action';

let initialState = {
  count: 0
}
export default function update(state = initialState, action) {
  switch (action.type) {
    case INCREASE:
      return Object.assign({}, state, { count: ++state.count })
    case DECREASE:
      return {...state, ...{count: --state.count}}
    case ODDADD:
      return state.count % 2 === 0? state : {...state, ...{count: state.count = state.count + 2}}
    default:
     return state
  }
}