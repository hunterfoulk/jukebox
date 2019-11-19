import React from "react";
import Navbar from "./components/Navbar/Navbar";
import Display from "./components/Display/Display";
import Playlist from "./components/Playlist/Playlist";
import { StateProvider } from "./state";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

function App() {
  const initialState = {
    auth: {
      isAuthenticated: false,
      token: "",
      user: {}
    }
  };

  const reducer = (state, action) => {
    switch (action.type) {
      case "login":
        return {
          ...state,
          auth: action.auth
        };
      case "logout":
        return {
          ...initialState
        };

      default:
        return state;
    }
  };

  return (
    <div style={{ height: "100%" }}>
      <main style={{ marginTop: "64px" }}>
        <StateProvider initialState={initialState} reducer={reducer}>
          <Router>
            <Navbar />

            <Switch>
              <Route exact path="/" component={Display} />
              <Route path="/playlist" component={Playlist} />
              {/*<Route component={Error} />*/}
            </Switch>
          </Router>
        </StateProvider>
      </main>
    </div>
  );
}

export default App;
