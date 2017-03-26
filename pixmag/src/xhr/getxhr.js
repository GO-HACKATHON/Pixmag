import axios from 'axios'

let LoginUser = function(user, pass) {
  return axios.get("http://localhost:1314/api/Login/"+user+"/"+pass);
}

export { LoginUser }
