import http from "../config/http"
import { LoginInfo, UserType } from "../modules/Auth/models";
import { SERVER_ROUTE } from "./constants";
import { EndpointsEnum } from "./models";

const url = `${SERVER_ROUTE}${EndpointsEnum.LOGIN}`;

const login = (authInfo: LoginInfo) => {
  return http.postData<UserType, LoginInfo>(url, authInfo)
}

const loginService = {
  login
}

export default loginService
