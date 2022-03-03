import {setHotList} from './actionTypes'
import {get} from "@a/http"
function setHotListData(list){
  return {
    type:setHotList,
    list
  }
}
function setHotListDataSync(url){
  return async (dispatch) => {
    const reslut = await get("/api/hotList")
    dispatch(setHotListData(reslut))
  }
}
export {
  setHotList,
  setHotListDataSync
}