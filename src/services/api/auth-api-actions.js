import { UTILS } from "../../utils";
import { postData } from "./";
import { URLS } from "./api-urls";
export const onLogin = (values, setLoading = (bool) => {}, props) => {
  return async (dispatch, getState) => {
    try {
      setLoading(true);
      const res = await postData(URLS.auth.login, values);
      console.log("res of onLogin=>", res);
      // dispatch(setUserInfo(res));
    } catch (error) {
      console.log("error in login", UTILS.returnError(error));
      alert(UTILS.returnError(error));
    } finally {
      setLoading(false);
    }
  };
};
export const onSignup = (values, setLoading = (bool) => {}) => {
  return async (dispatch, getState) => {
    try {
      setLoading(true);
      const res = await postData(URLS.auth.signup, values);
      console.log("res of onSignupPress=>", res);
    } catch (error) {
      console.log("error in onSignupPress", UTILS?.returnError(error));
      alert("", UTILS?.returnError(error));
    } finally {
      setLoading(false);
    }
  };
};
