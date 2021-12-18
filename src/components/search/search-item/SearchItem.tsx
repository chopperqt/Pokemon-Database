import React from 'react'
import { NavLink } from 'react-router-dom'

interface ISearchItem {
    img: string,
    name: string,
    surname: string
}

const SearchItem = ({
    img,
    name,
    surname,
}: ISearchItem) => (
    <div>
        <NavLink to="/">
            <img src={img} alt={name} />
        </NavLink>
    </div>
)

export default SearchItem