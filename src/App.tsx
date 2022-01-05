import React, { useState } from "react";
import {
    Routes,
    Route,
} from 'react-router-dom'

import { Search, Logo } from "./components";
import Home from "src/pages/Home";
import Pokemon from 'src/pages/pokemon/Pokemon'

import { isScrolled } from 'src/helpers/scroll'

import "./assets/default.scss";
import './assets/typography.scss'

function App() {
    const [isBottom, setIsBottom] = useState<boolean>(false)

    window.addEventListener('scroll' , () => {
        setIsBottom(isScrolled('bottom'))  
    })

    return (
        <div className="App">
            <div className="container">
                <Logo />
                <Search />
				<Routes>

					<Route index={false} path="/" element={<Home hasScrollBottom={isBottom} />} />
                    <Route path="/pokemon/:pokemon" element={<Pokemon />} />
				</Routes>
                
            </div>
        </div>
    );
}

export default App;
