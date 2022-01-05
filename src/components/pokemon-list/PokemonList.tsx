import React from "react";

import PokemonItem from "./item/Item";
import { SkeletonPokemonMore } from "src/components";

import styles from "./PokemonList.module.scss";

const PokemonList = ({
    pokemonList,
}: {
    pokemonList: { name: string; url: string }[];
}) => (
    <div>
        <div className={styles.list}>
            {pokemonList.map(({ name, url }, index) => (
                <PokemonItem key={index} name={name} url={url} />
            ))}
        </div>
        <SkeletonPokemonMore />
    </div>
);

export default PokemonList;
