import axios from "axios";
function get(url){
  return new Promise((resolve,reject) => {
    axios.get(url).then(res => resolve(res.data.data)).then(err => reject(err))
  })
}
export {
  get
}