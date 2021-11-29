import axios from "axios";
const USERS_API_BASE_URL = "http://localhost:8080/api/v1/users"

class UsersServices
{
    createUser(u)
    {
        return axios.post(USERS_API_BASE_URL, u);
    }
}
export default new UsersServices();
