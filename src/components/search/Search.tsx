import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";

import SearchItem from "./search-item/SearchItem";
import Empty from "./empty/Empty";
import { searchPokemon } from "src/api/pokemons";
import { IStore } from "src/services/rootStore";
import { Loader } from "src/components";

import styles from "./Search.module.scss";

const DEFAULT_SEARCH_LENGTH = 4;

const Search = () => {
    const dispatch = useDispatch();
    const [searchValue, setSearchValue] = useState<string>("");
    const [popup, setPopup] = useState<boolean>(false);
    const loading = useSelector((store: IStore) => store.notifications.loading);
    const pokemon = useSelector((store: IStore) => store.pokemons.search);
    const hasLoading = loading.searchPokemon;
    const hasPokemon = Object.keys(pokemon).length > 0

    const name = hasPokemon && pokemon.name
    const img = hasPokemon && pokemon.sprites.other['official-artwork'].front_default

    useEffect(() => {
        if (searchValue.length >= DEFAULT_SEARCH_LENGTH) {
            setPopup(true);
            searchPokemon(searchValue);

            return;
        }
        setPopup(false);
    }, [searchValue]);

    return (
        <div className={styles.search}>
            <input
                type="text"
                name="search"
                className={styles.field}
                value={searchValue}
                onChange={(e) => setSearchValue(e.target.value)}
                placeholder="Search"
                data-testid="search-input"
            />
            {popup && (
                <div data-testid="search-popup" className={styles.popup}>
                    <div className={styles.layout}>
                        {!hasPokemon && hasLoading && <Empty />}
                        {!hasLoading && <Loader className={styles.loader} />}
                        {hasPokemon && hasLoading && (
                            <SearchItem 
                                name={name} 
                                img={img}
                            />
                        )}
                    </div>
                </div>
            )}
        </div>
    );
};

export default Search;
