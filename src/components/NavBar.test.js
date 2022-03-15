import { fireEvent, render, screen } from "@testing-library/react";
import { Router } from "react-router-dom";
import cases from "jest-in-case";
import { createMemoryHistory } from "history";
import { NavBar } from "./NavBar";

cases('Links point to correct routes', ({ linkText, expectedPath }) => {
    const fakeHistory = createMemoryHistory()

    render(
        <Router history={fakeHistory}>
            <NavBar />
        </Router>
    )

    fireEvent.click(screen.getByText(linkText, {exact: false}))
    expect(fakeHistory.location.pathname).toEqual(expectedPath)
}, [
    {name: 'Has an app-logo link that sends the user to the "home" route', linkText: 'Friend Tracker', expectedPath: '/'},
    {name: 'Has a "my profile" link that sends the user to the "user-profile" route', linkText: 'Profile', expectedPath: '/user-profile'}
])
/*
test('Has an app-logo link that sends the user to the "home" route', () => {
    const fakeHistory = createMemoryHistory()

    render(
        <Router history={fakeHistory}>
            <NavBar />
        </Router>
    )

    fireEvent.click(screen.getByText(/friend tracker/i))
    expect(fakeHistory.location.pathname).toEqual('/')
})

test('Has a "my profile" link that sends the user to the "user-profile" route', () => {
    const fakeHistory = createMemoryHistory()

    render(
        <Router history={fakeHistory}>
            <NavBar />
        </Router>
    )

    fireEvent.click(screen.getByText(/profile/i))
    expect(fakeHistory.location.pathname).toEqual('/user-profile')
})
*/