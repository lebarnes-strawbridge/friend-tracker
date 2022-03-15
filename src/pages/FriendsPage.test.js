import { FriendsPage } from "./FriendsPage";
import { renderWithResources, renderInApp } from "../test-utils/renderers";
import { Router } from "react-router-dom";
import { createMemoryHistory } from "history";
import { render, screen, within } from "@testing-library/react";
import { fakePeople } from '../test-utils/fakes'

test('Displays all necessary sections', () => {
    renderWithResources(
        <FriendsPage />,
        {friends: fakePeople},
        {favoriteIds: ['123']}
    )

    const welcomeMessage = screen.queryByText(/welcome/i)
    expect(welcomeMessage).toBeInTheDocument()

    const lists = screen.getAllByRole('list')
    expect(lists).toHaveLength(2)
})

test('Displays the "favorites" in one list and the "non-favorites" in the other', () => {
    renderWithResources(
        <FriendsPage />,
        {friends: fakePeople},
        {favoriteIds: ['123']}
    )

    const favoritesList = screen.getAllByRole('list')[0]
    const favorites = within(favoritesList). getAllByRole('listitem')
    expect(favorites).toHaveLength(1)

    const nonFavoritesList = screen.getAllByRole('list')[1]
   
    const person1 = within(nonFavoritesList).getByText(/marcia pierce/i)
    const person2 = within(nonFavoritesList).getByText(/joy hunter/i)

    expect(person1).toBeInTheDocument()
    expect(person2).toBeInTheDocument()
})

test('Sends the user to the corresponding friend detail page when a friend is clicked', () => {
    const fakeHistory = createMemoryHistory()

    renderWithResources(
        <Router history={fakeHistory}>
            <FriendsPage />
        </Router>,
        {friends: fakePeople},
        {favoriteIds: ['234']}
    )

    screen.getByText(/erika gregory/i).click()
    expect(fakeHistory.location.pathname).toEqual('/friends/345')
})

test('Moves non-favorites to favorites when their button is clicked (and vice-versa)', () => {
    render(<FriendsPage />)

    const nonFavoritesList = screen.getAllByRole('list')[1]
    const person1ListItem = within(nonFavoritesList).getAllByRole('listitem')[0]
    within(person1ListItem).getByRole('button').click()

    const favoritesList = screen.getAllByRole('list')[0]
    expect(within(favoritesList).getByText(/marcia pierce/i)).toBeInTheDocument()

    const favoriteListItem = within(favoritesList).getAllByRole('listitem')[0]
    within(favoriteListItem).getByRole('button').click()
    expect(within(nonFavoritesList).getByText(/marcia pierce/i)).toBeInTheDocument()
})