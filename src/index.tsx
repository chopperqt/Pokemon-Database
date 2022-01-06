import React, { StrictMode } from "react";
import ReactDOM from "react-dom";
import { createStore, compose, applyMiddleware } from "redux";
import { BrowserRouter, HashRouter } from "react-router-dom";
import { Provider } from "react-redux";
import thunk from "redux-thunk";

import App from "./App";
import { rootStore } from "./services/rootStore";

import "./index.css";

// @ts-ignore
const composeEnhancers = (typeof window !== "undefined" && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__) || compose;

export const store = createStore(
    rootStore,
    composeEnhancers(applyMiddleware(thunk))
);

// ReactDOM.render((
//     <StrictMode>
//         <App />
//     </StrictMode>),
//     document.getElementById('root')
// )

ReactDOM.render(

        <Provider store={store}>
            <HashRouter>
                <StrictMode>
                    <App />
                </StrictMode>
            </HashRouter>
        </Provider>
,
    document.getElementById("root")
);
