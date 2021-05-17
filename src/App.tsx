import { Provider } from "react-redux";
import Header from "./components/molecules/Header";
import Sidebar from "./components/molecules/Sidebar";
import Home from "./components/organisms/Home";
import Workspace from "./components/organisms/Workspace";
import Profile from "./components/organisms/Profile";
import Entities from "./components/organisms/Entities";
import { store } from "./redux/store";
import { initDayJs } from "./helpers/initializers";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from "react-router-dom";

function App() {
  initDayJs();

  return (
    <Provider store={store}>
      <Router>
        <div className="flex flex-col items-center min-h-screen pt-16 bg-gray-bg">
          <Header />
          <div className="flex w-full max-w-screen-xl min-h-full">
            <Sidebar />
            <Switch>
              <Route path="/workspace/:slug">
                <Workspace />
              </Route>
              <Route path="/entities">
                <Entities />
              </Route>
              <Route path="/me">
                <Profile />
              </Route>
              <Route path="/profile" exact>
                <Redirect to="/me" />
              </Route>
              <Route path="/">
                <Home />
              </Route>
            </Switch>
          </div>
        </div>
      </Router>
    </Provider>
  );
}

export default App;
