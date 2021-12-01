const initialState = {
  token: localStorage.getItem("token"),
  isLoggedIn: localStorage.getItem("token") ? true : false,
  userName: localStorage.getItem("username"),
  email: localStorage.getItem("email")
};

export const authReducer = (state = initialState, action) => {
  if (action.type === "LOG_IN") {
    localStorage.setItem("token", action.payload.token);
    localStorage.setItem("username", action.payload.userName);
    localStorage.setItem("email", action.payload.email);
    return {
      token: action.payload.token,
      isLoggedIn: !state.isLoggedIn,
      userName: action.payload.userName,
      email: action.payload.email
    };
  }
  if (action.type === "LOG_OUT") {
    localStorage.removeItem("token");
    localStorage.removeItem("username");
    localStorage.removeItem("email");
    return {
      token: null,
      isLoggedIn: !state.isLoggedIn,
      userName: null,
      email: null
    };
  }
  return state;
};

export const fetchSignInData = (
  url,
  enteredEmail,
  enteredPassword,
  history
) => {
  return async (dispatch) => {
    const response = await fetch(url, {
      method: "POST",
      body: JSON.stringify({
        email: enteredEmail,
        password: enteredPassword,
        returnSecureToken: true
      }),
      headers: {
        "Content-Type": "application/json"
      }
    });
    const data = await response.json();
    await dispatch({
      type: "LOG_IN",
      payload: {
        token: data.idToken,
        userName: data.email.split("@")[0],
        email: data.email
      }
    });
    await history();
  };
};
