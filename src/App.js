import React, {useState} from "react";
import { createStore } from "redux";
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";

import { Favourite }  from './Components/Favourite/Favourite';
import { ThemeProvider } from 'styled-components';
import HomePage from "./Components/Home/HomePage";
import allReducers from './store/index';
import { Provider } from "react-redux";

const LightTheme ={
  pageBackground:'#F2EDD7',
  headerBackground: '#ddc3a5',
  headerColor:'#1d3c45',
  buttonBackColor: '#f2edd7',
  buttonColor: '#474747',
  buttonHover: '#fff',
  buttonHoverColor: '#474747',
  contentBackground: '#b38867',
  forecasetBackGround: "#F8EBD9",
  forecasetColor: "#282c36",
  searchColor:"#282c36",
  searchBorder: "#be762a",
  favouriteBg: '#b38867',
  favouriteBoxShadow: "rgba(0, 0, 0, 0.35) 0px 5px 15px",
}

const DarkTheme ={
  pageBackground:'#282c36',
  headerBackground: '#1e1f26',
  headerColor:'white',
  buttonBackColor: '#4D648D',
  buttonColor: '#fff',
  buttonHover: '#fff',
  buttonHoverColor: '#474747',
  contentBackground: '#283655',
  forecasetBackGround: "#4D648D",
  forecasetColor: "#fff",
  searchColor:"#fff",
  searchBorder: "#ffffffa3",
  favouriteBg: '#4D648D',
  favouriteBoxShadow:"rgba(255, 255, 255, 0.33) 0px 0px 15px",
}

const themes ={
  light: LightTheme,
  dark: DarkTheme
}

const store = createStore(
  allReducers
)

function App() {
  const [theme, setTheme] = useState("light")

  return (
    <ThemeProvider theme={themes[theme]}>
      <Provider store={store}>
        <Router>
          <Switch>
            <Route exact path="/">
              <HomePage  
                theme={theme} 
                setTheme={setTheme} 
              />
            </Route>
            <Route path="/favourite">
              <Favourite  
                theme={theme} 
                setTheme={setTheme} 
              />
            </Route>
          </Switch>
        </Router>
      </Provider>
    </ThemeProvider>
  );
}

export default App;
