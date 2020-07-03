import React from "react";
import "./App.css";
import BottomNavigationTabs from "./components/BottomNavigation/BottomNavigationTabs";
import Header from "./components/Header/Header";
import { MuiThemeProvider, createMuiTheme } from "@material-ui/core/styles";
import UnderDevelopment from "./pages/UnderDevelopment/UnderDevelopment";
import { Route } from "react-router-dom";
import Dashboard from "./pages/Dashboard/Dashboard";
import Search from "./pages/Search/Search";

const theme = createMuiTheme({
    palette: {
        primary: {
            main: "#4fc3f7",
            light: "##8bf6ff",
            dark: "#0093c4",
        },
        secondary: {
            main: "#f48fb1",
            light: "#ffc1e3",
            dark: "#bf5f82",
        },
        accent: {
            main: "#f48fb1",
            light: "#ffc1e3",
            dark: "#bf5f82",
        },
    },
    typography: {
        useNextVariants: true,
    },
});

function App() {
    return (
        <MuiThemeProvider theme={theme}>
            <div className="App">
                <Header />
                <div className="contentContainer">
                    <Route path="/" exact component={Dashboard} />
                    <Route path="/search" component={Search} />
                    <Route path="/inventory" component={UnderDevelopment} />
                    <Route path="/progress" component={UnderDevelopment} />
                </div>
                <BottomNavigationTabs />
            </div>
        </MuiThemeProvider>
    );
}

export default App;
