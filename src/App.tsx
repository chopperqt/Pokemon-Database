import React, { useState } from "react";
import {
    Routes,
    Route,
} from 'react-router-dom'

import { Search } from "./components";
import Home from "src/pages/Home";
import Pokemon from 'src/pages/Pokemon'
import logo from 'src/templates/logo.png'
import { isScrolled } from 'src/helpers/scroll'


import "./assets/default.css";

function App() {
    const [isBottom, setIsBottom] = useState<boolean>(false)


    window.addEventListener('scroll' , () => {
        setIsBottom(isScrolled('bottom'))  
    })

    return (
        <div className="App">
            <div className="container-lg">
                <div className="logo">
                    <img src={logo} alt={logo} />
                </div>
                <Search />
				<Routes>
					<Route path="/" element={<Home hasScrollBottom={isBottom} />} />
                    <Route path="/pokemon/:pokemon" element={<Pokemon />} />
				</Routes>
                
            </div>
        </div>
    );
}

export default App;
