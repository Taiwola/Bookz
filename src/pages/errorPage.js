// ErrorPage.jsx

import React from "react";

const ErrorPage = () => {
    return (
        <div className="errorContainer">
            <h1 className="errorHeading">Oops!</h1>
            <p className="errorMessage">Something went wrong.</p>
            <p className="errorDescription">
                The page you are looking for might be temporarily unavailable or does not exist.
            </p>
            <p className="errorLink">
                <a href="/">Go back to the home page</a>
            </p>
        </div>
    );
}

export default ErrorPage;
