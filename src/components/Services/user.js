import { Axios } from "axios";

class UserService {
    signUp(data){
       Axios({
          method: "POST",
          url: "http://167.99.78.93:4009/v1/auth/register",
          data
        });
    }
}
export default UserService;