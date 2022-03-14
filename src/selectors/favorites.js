import { createSelector } from 'reselect'
import { getFriends, getFriendById } from './friends'

export const getFavoriteIds = state => state.favorites

export const getFavorites = createSelector(
    getFavoriteIds,
    state => id => getFriendById(id)(state),
    (ids, getFriendById) => ids.map(id => getFriendById(id))
)

export const getIsFavorite = (id, state) => getFavoriteIds(state).includes(id)

export const getNonFavorites = createSelector(
    getFriends,
    getFavoriteIds,
    (friends, favoriteIds) => friends.filter(friend => !favoriteIds.includes(friend.id))
)

//export const getFavorites = state => getFavoriteIds(state).map(id => getFriendById(id, state))
//export const getNonFavorites = state => getFriends(state).filter(friend => !getFavoriteIds(state).includes(friend.id))