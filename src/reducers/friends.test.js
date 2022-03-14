import { friendsReducer } from "./friends";
import { ADD_FRIEND, EDIT_FRIEND } from "../actions/friends";

const friend1 = {
    id: '123',
    name: 'Marcia Pierce',
    profilePicUrl: `${process.env.PUBLIC_URL}/friend-1.jpg`,
    age: 35,
    birthday: 'September 4',
    bio: 'Freelance writer from Chicago',
    interests: ['Traveling', 'Languages', 'Collecting souvenirs']
}

const friend2 = {
    id: '234',
    name: 'Joy Hunter',
    profilePicUrl: `${process.env.PUBLIC_URL}/friend-2.jpg`,
    age: 24,
    birthday: 'December 3',
    bio: 'Graduate student at UNC Wilmington',
    interests: ['Reality shows', 'History', 'Museums']
}

test('Prepends the new friend info to the existing friends array when ADD_FRIEND action occurs', () => {
    const startingState = [friend1]

    const fakeAction = {
        type: ADD_FRIEND,
        payload: {
            newFriendInfo: friend2
        }
    }    

    const actual = friendsReducer(startingState, fakeAction)
    const expected = [friend2, friend1]

    expect(actual).toEqual(expected)
})

test('Applies updats to friend when EDIT_FRIEND action occurs', () => {
    const startingState = [friend1, friend2]

    const fakeAction = {
        type: EDIT_FRIEND,
        payload: {
            friendId: '123', 
            updates: {name: 'Yva Hayes'}
        }
    }    

    const actual = friendsReducer(startingState, fakeAction)
    const expected = [{...friend1, name: 'Yva Hayes'}, friend2]

    expect(actual).toEqual(expected)
})