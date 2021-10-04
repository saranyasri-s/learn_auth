import NavBar from "./components/NavBar";
import { Route, Redirect, Switch } from "react-router-dom";
import LoginPage from "./components/LoginPage";
import WelcomePage from "./components/WelcomePage";
function App() {
  return (
    <>
      <NavBar></NavBar>
      <main>
        <Switch>
          <Route path="/" exact>
            <Redirect to="/LoginPage"></Redirect>
          </Route>
          <Route path="/LoginPage" exact>
            <LoginPage></LoginPage>
          </Route>
          <Route path="/MyProfile">
            <WelcomePage></WelcomePage>
          </Route>
        </Switch>
      </main>
    </>
  );
}

export default App;
