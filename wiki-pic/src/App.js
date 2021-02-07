import "./App.css";
import React from "react";
import MuiThemeProvider from "material-ui/styles/MuiThemeProvider";

import NavBar from "./components/navbar/NavBar";
import Search from "./components/search/Search";

class App extends React.Component {
  render() {
    return (
      <MuiThemeProvider>
        <div>
          <NavBar />
          <Search />
        </div>
      </MuiThemeProvider>
    );
  }
}

export default App;
