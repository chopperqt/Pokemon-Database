import React, { useState, useEffect, useRef } from "react";
import { useSelector, useDispatch } from "react-redux";
import cx from 'classnames'

import SearchItem from "./search-item/SearchItem";
import Empty from "./empty/Empty";
import { searchPokemon } from "src/api/pokemons";
import { IStore } from "src/services/rootStore";
import { Loader } from "src/components";

import styles from "./Search.module.scss";

const DEFAULT_SEARCH_LENGTH = 4;

const Search = () => {
    const dispatch = useDispatch();
    const popupRef = useRef(null)
    const layoutRef = useRef<HTMLDivElement>(null)
    const inputRef = useRef<HTMLInputElement>(null)
    const [searchValue, setSearchValue] = useState<string>("");
    const [hasPokemon, setHasPokemon] = useState<boolean>(false);
    const [popup, setPopup] = useState<boolean>(false);
    const loading = useSelector((store: IStore) => store.notifications.loading);
    const pokemon = useSelector((store: IStore) => store.pokemons.search);
    const hasLoading = loading.searchPokemon;
    const hasPopup = searchValue.length >= DEFAULT_SEARCH_LENGTH

    const handleClickLink = ( ) => {
        setSearchValue('')
        setPopup(false)
    }
    
    const handleClickOver = (event:any) => {
        if (layoutRef.current && event.target) {
            if (event.target!.closest(`.search`) && hasPopup )  {
                return setPopup(true)
            } 

            setPopup(false)
        }
    }

    const handleFocusSearch = () => {
        if (hasPopup) {
            setPopup(true)
        }
    }

    useEffect(() => {
        if (hasPopup) {
            setPopup(true);
            searchPokemon(searchValue);

            return;
        }
        setPopup(false);
    }, [searchValue]);

    useEffect(() => {
        if (Object.keys(pokemon).length !== 0) {
            return setHasPokemon(true)
        }

        setHasPokemon(false)

    }, [pokemon]) 

    useEffect(() => {
        window.addEventListener('click', handleClickOver)
        
        if (inputRef.current) {
            inputRef.current.addEventListener('click', handleFocusSearch)
        }

        return () => {
            window.removeEventListener('click', handleClickOver)
        }
    }, [])

    return (
        <div 
            className={cx(
                styles.search, 
                'search'
                )
            }
            ref={layoutRef}    
        >
                 
            <input
                type="text"
                name="search"
                className={styles.field}
                value={searchValue}
                onChange={(e) => setSearchValue(e.target.value)}
                placeholder="Search"
                data-testid="search-input"
                ref={inputRef}
                autoComplete="off"
            />
            {popup && (
                <div data-testid="search-popup" ref={popupRef} className={styles.popup}>
                    <div className={styles.layout}>
                        {hasPokemon && hasLoading && (
                            <SearchItem 
                                click={handleClickLink}
                                name={pokemon?.name} 
                                img={pokemon?.sprites?.other['official-artwork']?.front_default}
                                id={pokemon?.id}
                                types={pokemon?.types}
                                order={pokemon?.order}
                                isDefault={pokemon?.isDefault}
                            />
                        )}
                        {!hasPokemon && hasLoading && <Empty />}
                        {!hasLoading && <Loader className={styles.loader} />}
                    </div>
                </div>
            )}
        </div>
    );
};

export default Search;
