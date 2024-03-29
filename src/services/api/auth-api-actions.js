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
      if (isPhoneAuth === "social") {
        const res = await postData(URLS.auth.social_login, values);
        dispatch(setUserInfo(res));
        console.log("res of social onLogin::=>", res);
      } else {
        const res = await postData(
          isPhoneAuth ? URLS.auth.login_phone : URLS.auth.login,
          values
        );
        console.log("res of onLogin::=>", res);
        dispatch(setUserInfo(res));
      }

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
export const onEmailSend = (values) =>
  postData(URLS.auth.forgot_password, values);
export const onPasswordsSend = (values) =>
  postData(URLS.auth.new_password, values);
export const onUpdateProfile = (values) =>
  postFormData(URLS.auth.update_profile, values);
