import React, { useState, useEffect } from "react";
import { Provider } from "react-redux";
import { ThemeProvider } from "styled-components";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from "react-router-dom";
import { Favourite } from "./сomponents/Favourite/Favourite";
import { themes } from "./themes";
import { store } from "./store";
import HomePage from "./сomponents/Home/HomePage";

function App() {
  const getAppTheme = localStorage.getItem('appTheme')
  const [theme, setTheme] = useState(getAppTheme || "light");

  useEffect(() => {
    localStorage.setItem('appTheme' , theme)
  }, [theme])

  return (
    <ThemeProvider theme={themes[theme]}>
      <Provider store={store}>
        <Router>
          <Switch>
            <Route exact path="/city">
              <HomePage theme={theme} setTheme={setTheme} />
            </Route>

            <Route exact path="/city/:cityID">
              <HomePage theme={theme} setTheme={setTheme} />
            </Route>

            <Route exact path="/favourite">
              <Favourite theme={theme} setTheme={setTheme} />
            </Route>
            <Redirect from="/" to="/city" />
          </Switch>
        </Router>
      </Provider>
    </ThemeProvider>
  );
}

export default App;
