import {
    getFavorites,
    getIsFavorite,
    getNonFavorites
} from './favorites'

const people = [
    {
        id: '123',
        name: 'Marcia Pierce',
        profilePicUrl: `${process.env.PUBLIC_URL}/friend-1.jpg`,
        age: 35,
        birthday: 'September 4',
        bio: 'Freelance writer from Chicago',
        interests: ['Traveling', 'Languages', 'Collecting souvenirs']
      }, 
      {
        id: '234',
        name: 'Joy Hunter',
        profilePicUrl: `${process.env.PUBLIC_URL}/friend-2.jpg`,
        age: 24,
        birthday: 'December 3',
        bio: 'Graduate student at UNC Wilmington',
        interests: ['Reality shows', 'History', 'Museums']
      },
      {
        id: '345',
        name: 'Kent Cole',
        profilePicUrl: `${process.env.PUBLIC_URL}/friend-3.jpg`,
        age: 54,
        birthday: 'September 7',
        bio: 'Stock broker from Philadelphia',
        interests: ['Current Events', 'Speaking', 'Wine']
      }
]

test('getFavorites correctly populates favoritesIds with people', () => {
    const favorites = ['123', '345']
    const friends = people

    const state = {
        favorites,
        friends
    }

    const actual = getFavorites(state)
    const expected = [people[0], people[2]]

    expect(actual).toEqual(expected)
})

test('getIsFavorites returns true if person id is in favorites', () => {
    const favorites = ['123', '345']
    const id = '123'
    const state = {
        favorites
    }

    const actual = getIsFavorite(id, state)
    const expected = true
    expect(actual).toEqual(expected)
})

test('getIsFavorite returns false if person id is in not favorites', () => {
    const favorites = ['123', '345']
    const id = '2222'
    const state = {
        favorites
    }

    const actual = getIsFavorite(id, state)
    const expected = false
    expect(actual).toEqual(expected)
})

test('getNonFavorites returns all people whose id is not in favorites', () => {
    const favorites = ['123', '345']
    const friends = people

    const state = {
        favorites,
        friends
    }

    const actual = getNonFavorites(state)
    const expected = [people[1]]

    expect(actual).toEqual(expected)
})