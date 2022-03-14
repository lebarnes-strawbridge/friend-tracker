import { fireEvent, render, screen } from "@testing-library/react";
import { PersonCard } from "./PersonCard";

const fakePerson = {
    id: '999',
    name: 'L. E. Barnes',
    profilePicUrl: `${process.env.PUBLIC_URL}/my-pic.jpg`,
    age: 47,
    bio: 'In magna in esse consequat mollit mollit aute laboris ut reprehenderit. Excepteur ad excepteur adipisicing est ad laboris mollit aute non aliqua. Elit mollit commodo excepteur nisi ut. Amet amet id qui Lorem id mollit est est ex sint ut ullamco.',
    birthday: 'January 11',
    interests: ['Programming', 'Knitting', 'Reading']
}

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
