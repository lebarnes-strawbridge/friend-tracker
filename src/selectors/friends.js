import { createSelector } from "reselect"

export const getFriends = state => state.friends

export const getFriendById = id => createSelector(
    getFriends,
    (friends) => friends.find(friend => friend.id === id)
)

//(id, state) => getFriends(state).find(friend => friend.id === id)