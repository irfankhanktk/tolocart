import { setUserInfo } from "../../store/reducers/user-reducer";
import { UTILS } from "../../utils";
import { postData, postFormData } from "./";
import { URLS } from "./api-urls";
export const onLogin = (
  values,
  setLoading = (bool) => {},
  isPhoneAuth,
  setShow = (bool) => {}
) => {
  return async (dispatch, getState) => {
    try {
      setLoading(true);
      const res = await postData(
        isPhoneAuth ? URLS.auth.login_phone : URLS.auth.login,
        values
      );

      console.log("res of onLogin::=>", res);
      dispatch(setUserInfo(res));
      setShow(false);
    } catch (error) {
      console.log("error in login", UTILS.returnError(error));
      alert(UTILS.returnError(error));
    } finally {
      setLoading(false);
    }
  };
};
export const onSignup = (values) => postData(URLS.auth.register, values);
