import React,{useEffect} from 'react';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { MuiThemeProvider, createMuiTheme } from "@material-ui/core";
import { useSelector} from "react-redux";
import './App.css';
import Navbar from "./components/NavBar";
import Home from "./components/Home";
import SinglePokemon from "./components/SinglePokemon";
import ErrorPage from "./components/ErrorPage";


function App() {
  const darkMode = useSelector(store => store.darkModeReducer.darkMode);

  useEffect(() => { document.body.style.backgroundColor = darkMode ? "#272727" : "#D3D3D3" },
     [darkMode]
   );

  const theme = createMuiTheme({
    palette: {
      primary: {
        main: "#bd4040",
        light: "#8bcbad",
        dark: "#89a5ad"
      },
      secondary: {
        main: "#8b70d2",
        light: "#8b9ad2",
        dark: "#c46d99"
      },
      background: {
        paper: darkMode ? "#424242" : "#fcfcfc"
      },
     type: darkMode ? "dark" : "light",
    },
  });
  console.log(theme)


  return (
    <Router>
      <MuiThemeProvider theme={theme}>
        <div className="App">
          <Navbar />
          <Switch>
            <Route path="/" exact component={Home} />
            <Route path="/SinglePokemon/:pokemonId" exact component={SinglePokemon}/>
            <Route component={ErrorPage} />
          </Switch>
        </div>
      </MuiThemeProvider>
    </Router>
  );
}

export default App;
