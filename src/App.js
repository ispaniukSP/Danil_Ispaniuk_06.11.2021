import React, {useState} from "react";
import HomePage from "./Components/Home/HomePage";
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
      <HomePage theme={theme} setTheme={setTheme} />
    </ThemeProvider>
  );
}

export default App;
