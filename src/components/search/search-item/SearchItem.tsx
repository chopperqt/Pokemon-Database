import React from 'react'
import { NavLink } from 'react-router-dom'

interface ISearchItem {
    img?: string,
    name: string,
    surname?: string
}

const SearchItem = ({
    img,
    name,
    surname,
}: ISearchItem) => {
    const pokemonUrl = `/pokemon/${name}`


    return (
        <div>
            <NavLink to={pokemonUrl}>
                {name}
                <img src={img} alt={name} />
            </NavLink>
        </div>
    )
}

export default SearchItem