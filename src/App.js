import { useSelector } from "react-redux";
import { Switch, Route, Redirect } from "react-router-dom";
import RequestDetails from "./components/Requests/RequestDetails";
import Layout from "./components/Layout/Layout";
import UserProfile from "./components/Profile/UserProfile";
import AuthPage from "./pages/AuthPage";
import HomePage from "./pages/HomePage";

function App() {
  const auth = useSelector((state) => state);
  return (
    <Layout>
      <Switch>
        <Route path="/" exact>
          {auth.isLoggedIn && <HomePage />}
          {!auth.isLoggedIn && <Redirect to="/auth" />}
        </Route>
        {!auth.isLoggedIn && (
          <Route path="/auth">
            <AuthPage />
          </Route>
        )}

        <Route path="/profile">
          {auth.isLoggedIn && <UserProfile />}
          {!auth.isLoggedIn && <Redirect to="/auth" />}
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
