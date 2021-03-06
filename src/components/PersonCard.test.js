import { fireEvent, render, screen } from "@testing-library/react";
import { PersonCard } from "./PersonCard";
import { fakePerson } from '../test-utils/fakes'


test('Displays the person\'s name, age, and profile pic', () => {
    render(<PersonCard person={fakePerson} />)

    expect(screen.getByText(fakePerson.name)).toBeInTheDocument()
    expect(screen.getByText(fakePerson.age)).toBeInTheDocument()

    expect(screen.getByRole('img')).toHaveAttribute('src', fakePerson.profilePicUrl)
})

test('Displays a button for the specified actionName prop', () => {
    render(<PersonCard person={fakePerson} actionName="Do something" onAction={() => {}} />)

    expect(screen.getByRole('button')).toHaveTextContent('Do something')
})

test('Calls the specified onAction function with the person\'s id when the action button is clicked', () => {
    const mockCallback = jest.fn()

    render(<PersonCard person={fakePerson} actionName="Click Me!" onAction={mockCallback} />)

    fireEvent.click(screen.getByText('Click Me!'))

    expect(mockCallback).toHaveBeenCalledWith(fakePerson.id)
})

test('Calls the specified onCardClicked function with the person\'s id when the container is clicked', () => {
    const mockCallback = jest.fn()
    render(<PersonCard person={fakePerson} actionName="Hi I'm a button!" onCardClicked={mockCallback} />)

    fireEvent.click(screen.getByRole('listitem'))

    expect(mockCallback).toHaveBeenCalledWith(fakePerson.id)
})

test('Doesn\'t display any button if no actionName or onAction callback are specified', () => {
    render(<PersonCard person={fakePerson} actionName="Don't display me!" />)
    expect(screen.queryByText('Don\'t display me!')).not.toBeInTheDocument()

    render(<PersonCard person={fakePerson} onAction={() => {}} />)
    expect(screen.queryByRole('button')).not.toBeInTheDocument()
})