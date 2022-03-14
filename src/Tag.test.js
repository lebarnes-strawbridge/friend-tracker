import { render, screen } from '@testing-library/react'
import {Tag} from './Tag'

test('Displays the supplied text prop', () => {
    render(<Tag text="Does this work?" />)
    const tag = screen.getByText('Does this work?')
    expect(tag).toBeInTheDocument()
})