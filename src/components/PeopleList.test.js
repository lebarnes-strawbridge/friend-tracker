import { PeopleList } from "./PeopleList";
import { fireEvent, render, screen } from "@testing-library/react";
import { createMemoryHistory } from "history";
import { Router } from "react-router-dom";
import {fakePeople} from '../test-utils/fakes'

test('Renders as many list items as people', () => {
    render(<Router><PeopleList people={fakePeople} /></Router>)
    expect(screen.getAllByRole('listitem')).toHaveLength(fakePeople.length)
})

test('Does not render an "add" button if the "allowAdditions" prop is not specified', () => {
    render(<Router><PeopleList people={fakePeople} /></Router>)
    expect(screen.queryByText('add', {exact: false})).not.toBeInTheDocument()
})

test('Renders an "add" button if the "allowAdditions" prop is set to true', () => {
    render(<Router><PeopleList people={fakePeople} allowAdditions /></Router>)
    expect(screen.getByText('add', {exact: false})).toBeInTheDocument()
})

test('Sends the user to the new friend page route when the add new friend button is clicked', () => {
    const fakeHistory = createMemoryHistory()
    render(
        <Router history={fakeHistory}>
            <PeopleList people={fakePeople} allowAdditions />
        </Router>
    )

    fireEvent.click(screen.getByText('add', {exact: false}))
    expect(fakeHistory.location.pathname).toEqual('/new-friend')
})
