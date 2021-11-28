import { useSelector } from "react-redux";
import { Switch, Route, Redirect } from "react-router-dom";
import RequestDetails from "./components/Requests/RequestDetails";
import Layout from "./components/Layout/Layout";
import UserProfile from "./components/Profile/UserProfile";
import AuthPage from "./pages/AuthPage";
import HomePage from "./pages/HomePage";

function App() {
  const isLoggedIn = useSelector((state) => {
    return state.auth.isLoggedIn;
  });
  return (
    <Layout>
      <Switch>
        <Route path="/" exact>
          {isLoggedIn && <HomePage />}
          {!isLoggedIn && <Redirect to="/auth" />}
        </Route>
        {!isLoggedIn && (
          <Route path="/auth">
            <AuthPage />
          </Route>
        )}

        <Route path="/profile">
          {isLoggedIn && <UserProfile />}
          {!isLoggedIn && <Redirect to="/auth" />}
        </Route>
        <Route path="/request/:requestId">
          <RequestDetails />
        </Route>
        <Route path="*">
          <Redirect to="/" />
        </Route>
      </Switch>
    </Layout>
  );
}

export default App;
