import {setHotList} from './actionTypes'
const defaultState = {
  hotList:[]
}
export default function(state = defaultState,action){
  switch(action.type){
    case setHotList:
      return {
        hotList:action.list
      }
    default:
      return state
  }
}