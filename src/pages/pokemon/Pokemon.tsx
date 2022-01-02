import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";

import { fetchPokemon } from "src/api/pokemons";
import { IStore } from "src/services/rootStore";
import { Section, ProgressBar } from "src/components";
import Image from "./pokemon-image/Image";

import styles from "./Pokemon.module.scss";

interface IStat {
    base_stat: number;
    stat: {
        name: string;
    };
}

const BASE_STAT = "Base Stats:"
const BASE_INFO = 'Base info:'
 
const Pokemon = () => {
    const pokemonData = useSelector((store: IStore) => store.pokemons.pokemons);
    const params = useParams();
    const pokemonName = params!.pokemon;
    const hasPokemon = pokemonName && pokemonData[pokemonName];
    const art =
        pokemonName &&
        pokemonData[pokemonName].sprites!.other["official-artwork"]
            .front_default;
    const stats = pokemonName && pokemonData[pokemonName].stats;
    useEffect(() => {
        if (!hasPokemon) {
            if (pokemonName) fetchPokemon(pokemonName);
        }
    }, []);

    return (
        <div className={styles.pokemon}>
            {hasPokemon && <Image url={art} alt={pokemonName} />}
            <div>
                <Section>
                    <div>
                        <h3>{BASE_INFO}</h3>
                    </div>
                </Section>
                {hasPokemon && (
                    <Section>
                        <div>
                            <h3>{BASE_STAT}</h3>
                            <div className={styles.stats}>
                                {stats.map((stat: IStat) => (
                                    <ProgressBar
                                        name={stat.stat.name}
                                        stat={stat.base_stat}
                                    />
                                ))}
                            </div>
                        </div>
                    </Section>
                )}
            </div>
        </div>
    );
};

export default Pokemon;
