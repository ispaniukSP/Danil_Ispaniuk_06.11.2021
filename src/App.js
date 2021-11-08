import React, {useState} from "react";
import HomePage from './Components/Home/HomePage';
import { Favourite }  from './Components/Favourite/Favourite';
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
  contentBackground: '#b38867',
  contentColor: '',
  searchColor:"#282c36",
  searchBorder: "#be762a"
}

const DarkTheme ={
  pageBackground:'#282c36',
  headerBackground: '#1e1f26',
  headerColor:'white',
  contentBackground: '#283655',
  contentColor: '',
  searchColor:"#fff",
  searchBorder: "#ffffffa3",
}

const themes ={
  light: LightTheme,
  dark: DarkTheme
}

function App() {
  const [theme, setTheme] = useState("light")
  const [toggleTemp, setToggleTemp] = useState(false)

  return (
    <ThemeProvider theme={themes[theme]}>
      <Router>
        <Switch>
          <Route exact path="/">
            <HomePage  
              theme={theme} 
              setTheme={setTheme} 
              toggleTemp={toggleTemp} 
              setToggleTemp={setToggleTemp} 
            />
          </Route>
          <Route path="/favorite">
            <Favourite  
              theme={theme} 
              setTheme={setTheme} 
              toggleTemp={toggleTemp} 
              setToggleTemp={setToggleTemp} 
            />
          </Route>
        </Switch>
      </Router>
    </ThemeProvider>
  );
}

export default App;
