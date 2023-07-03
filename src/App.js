import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import Header from "./components/Header";
// import Homepage from "./Pages/Homepage";
// import CoinPage from "./Pages/CoinPage";
import { makeStyles } from "@material-ui/core";
import Alert from "./components/Alert";
import { Suspense, lazy } from "react";

const Homepage = lazy(() =>
    import ("./Pages/Homepage"));
const CoinPage = lazy(() =>
    import ("./Pages/CoinPage"));

const useStyles = makeStyles(() => ({
    App: {
        backgroundColor: "#14161a",
        color: "white",
        minHeight: "100vh",
    },
}));

function App() {
    const classes = useStyles();

    return ( <
        BrowserRouter >
        <
        div className = { classes.App } >
        <
        Header / >
        <
        Suspense fallback = { < div > Loading... < /div> }> <
            Routes >
            <
            Route path = "/"
            element = { < Homepage / > }
            />{ " " } <
            Route path = "/coins/:id"
            element = { < CoinPage / > }
            />{ " " } <
            /Routes>{ " " } <
            /Suspense> <
            /div>{ " " } <
            Alert / >
            <
            /BrowserRouter>
        );
    }
    export default App;