import axios from "axios";

export const loginUser = (email, password) => {
  return function(dispatch) {
    dispatch(loginUserStart());

    const data = {
      email,
      password,
      returnSecureToken: true
    };

    axios
      .post(
        "https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=AIzaSyDWR-7rCwg-HCx0siQMMXXviSd_q-vdEmM",
        data
      )
      .then(result => {
        dispatch(loginUserSuccess(result.data));
      })
      .catch(err => {
        dispatch(loginUserError(err));
      });
  };
};

export const loginUserStart = () => {
  return {
    type: "LOGIN_USER_START"
  };
};

export const loginUserSuccess = data => {
  return {
    type: "LOGIN_USER_SUCCESS",
    data
  };
};

export const loginUserError = error => {
  return {
    type: "LOGIN_USER_ERROR",
    error
  };
};
