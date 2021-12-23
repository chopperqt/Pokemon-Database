import React from 'react'
import { useSearchParams } from 'react-router-dom'


const Pokemon = () => {
    const name = useSearchParams('name')

    return (
        <div>
            Тут будет страницу с покемоном
        </div>
    )
}

export default Pokemon