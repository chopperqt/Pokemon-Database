import React from "react";
import {
    Routes,
    Route,
} from 'react-router-dom'

import { Search } from "./components";
import Home from "src/pages/Home";
import Pokemon from 'src/pages/Pokemon'
import logo from 'src/templates/logo.png'

import "./assets/default.css";

function App() {
    return (
        <div className="App">
            <div className="container-lg">
                <div className="logo">
                    <img src={logo} alt={logo} />
                </div>
                <Search />
				<Routes>
					<Route path="/" element={<Home />} />
                    <Route path="/pokemon/:pokemon" element={<Pokemon />} />
				</Routes>
                
            </div>
        </div>
    );
}

export default App;
