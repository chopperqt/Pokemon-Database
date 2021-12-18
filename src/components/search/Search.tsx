import React, { useState } from "react";

import SearchItem from './search-item/SearchItem'

import styles from './Search.module.css'

const Search = () => {
    const [searchValue, setSearchValue] = useState<string>("");

    return (
        <div className={styles.search}>
            <input
                type="text"
                name="search"
                className={styles.field}
                value={searchValue}
                onChange={(e) => setSearchValue(e.target.value)}
                placeholder="Give me pokemon name:)"
                data-testid="search-input"
            />
            {searchValue.length >= 0 && (
                <div data-testid="search-popup" className={styles.popup}>       
                </div>
            )}
        </div>
    );
};

export default Search;
