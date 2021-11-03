import React, {useState} from "react";
import HomePage from './Components/Home/HomePage';
import { Favorite }  from './Components/Favorite/Favorite';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import { ThemeProvider } from 'styled-components';

const LightTheme ={
  pageBackground:'#F2EDD7',
  headerBackground: '#ddc3a5',
  headerColor:'#1d3c45',
  contentBackground: '#333D79FF',
  contentColor: '',
}

const DarkTheme ={
  pageBackground:'#282c36',
  headerBackground: '#282c36',
  headerColor:'white',
  contentBackground: '',
  contentColor: '',
}

const themes ={
  light: LightTheme,
  dark: DarkTheme
}

function App() {
  const [theme, setTheme] = useState("light")
  return (
    <ThemeProvider theme={themes[theme]}>
      <Router>
        <Switch>
          <Route exact path="/">
            <HomePage  theme={theme} setTheme={setTheme} />
          </Route>
          <Route path="/favorite">
            <Favorite  theme={theme} setTheme={setTheme} />
          </Route>
        </Switch>
      </Router>
    </ThemeProvider>
  );
}

export default App;
