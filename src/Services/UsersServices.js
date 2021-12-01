import axios from "axios";
const USERS_API_BASE_URL = "http://localhost:8080/api/v1/users"
const USERS_API_BASE_URL_LOGIN = "http://localhost:8080/api/v1/login"

class UsersServices
{
    createUser(u)
    {
        return axios.post(USERS_API_BASE_URL, u);
    }
    loginUser(u) {
        return axios.post(USERS_API_BASE_URL_LOGIN, u).then(response => {
            return response
          }).catch(error => console.log(error));
    }
}
export default new UsersServices();
