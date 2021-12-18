import { combineReducers } from 'redux'

import { pokemonStore } from './pokemons/reducer'
import { notificationsStore } from './notifications/reducer'

import { methods as notificationsMethods } from './notifications/actions'
import { methods as pokemonMethods } from './pokemons/actions'

export const rootStore = combineReducers({
    pokemons: pokemonStore,
    notifications: notificationsStore
})

export const methods = {
    notificationsMethods,
    pokemonMethods,
}