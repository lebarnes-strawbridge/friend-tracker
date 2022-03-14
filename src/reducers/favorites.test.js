import { favoritesReducer } from "./favorites";
import { ADD_FAVORITE, REMOVE_FAVORITE } from "../actions/favorites";

test('Adds an id to favorites when the ADD_FAVORITE action occurs', () => {
    const startingState = ['567']
    const fakeAction = {type: ADD_FAVORITE, payload: {friendId: '123'}}

    const actual = favoritesReducer(startingState, fakeAction)
    const expected = ['567', '123']

    expect(actual).toEqual(expected)
})

test('Removes id from favorites when REMOVE_FAVORITE action occurs', () => {
    const startingState = ['123', '234', '456']
    const fakeAction = { type: REMOVE_FAVORITE, payload: { friendId: '234' }}

    const actual = favoritesReducer(startingState, fakeAction)
    const expected = ['123', '456']

    expect(actual).toEqual(expected)
})
