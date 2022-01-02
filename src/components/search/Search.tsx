import React, { useState } from "react";

import SearchItem from './search-item/SearchItem'
import Empty from './empty/Empty'

import styles from './Search.module.scss'

const Search = () => {
    const [searchValue, setSearchValue] = useState<string>("");
    const data = false

    return (
        <div className={styles.search}>
            <input
                type="text"
                name="search"
                className={styles.field}
                value={searchValue}
                onChange={(e) => setSearchValue(e.target.value)}
                placeholder="Pokemon name"
                data-testid="search-input"
            />
            {searchValue.length >= 4 && (
                <div data-testid="search-popup" className={styles.popup}>
                    <div>
                        {!data && (
                            <Empty />
                        )}
                    </div>
                </div>
            )}
        </div>
    );
};

export default Search;
