import React from "react";
import { v4 as uuidv4 } from 'uuid';

import PokemonItem from "./item/Item";
import { SkeletonPokemonMore } from "src/components";

import styles from "./PokemonList.module.scss";

const PokemonList = ({
    pokemonList,
}: {
    pokemonList: { name: string; url: string }[];
}) => (
    <div className={styles.list}>
        {pokemonList.map(({ name, url }, index) => (
            <PokemonItem 
                key={index}
                name={name} 
                url={url} 
            />
        ))}
        <SkeletonPokemonMore />
    </div>
);

export default PokemonList;
