import { NewFriendCard } from "./NewFriendCard";
import { fireEvent, render, screen } from "@testing-library/react";

test('It calls its onClick prop with no args when the component is clicked', () => {
    const onClickMock = jest.fn()
    render(<NewFriendCard onClick={onClickMock} />)
    fireEvent.click(screen.getByRole('listitem'))
    expect(onClickMock).toHaveBeenCalledWith()
})