import { PeopleList } from "./PeopleList";
import { fireEvent, render, screen } from "@testing-library/react";
import { createMemoryHistory } from "history";
import { Router } from "react-router-dom";

export const fakePeople = [
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