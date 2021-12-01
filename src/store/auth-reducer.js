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
