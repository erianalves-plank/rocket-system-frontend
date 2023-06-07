import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import Navbar from '../Navbar';


describe('Navbar', () => {
  it('Rendering Navbar and checking for text and icons', () => {
    render(<Navbar />);
    expect(screen.getByTestId('navbar')).toBeInTheDocument();

    const expectedText = 'Mining Rockets';
    const textElement = screen.getByText(expectedText);

    expect(textElement).toBeInTheDocument();

    const iconElementLeft = screen.getByTestId('rocket-icon-left');
    const iconElementRight = screen.getByTestId('rocket-icon-right');

    expect(iconElementLeft).toBeInTheDocument();
    expect(iconElementRight).toBeInTheDocument();
  });
});
