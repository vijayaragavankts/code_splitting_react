import React, { Suspense } from "react";
//import Banner from "../components/Banner/Banner";
//import CoinsTable from "../components/CoinsTable";
//import Banner from "../components/Banner/Banner";
import { ErrorBoundary } from "react-error-boundary";
import ErrorFallBack from "../components/ErrorBoundary";



const CoinsTable = React.lazy(() =>
    import ("../components/CoinsTable"));
const Banner = React.lazy(() =>
    import ("../components/Banner/Banner"));

function Homepage() {
    return ( <
        div >

        <
        ErrorBoundary FallbackComponent = { ErrorFallBack }
        onReset = {
            () => {} } >
        <
        Suspense fallback = { < div > Loading... < /div> }> <
            Banner / >
            <
            CoinsTable / >
            <
            /Suspense> <
            /ErrorBoundary>

            <
            /div>
        );
    }

    export default Homepage;