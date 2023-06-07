import { render, screen } from "@testing-library/react";
import '@testing-library/jest-dom/extend-expect';
import { Footer } from '../Footer';

describe("", () => {
    it("Rendering Footer and checking for texts", () => {
        render(<Footer/>);


        const expectedTextFooter = '© 2023 All Mining Rocket, Inc.';
        const expectedTextPT = 'PT';
        const expectedTextEN = 'EN';

        const textElement_I = screen.getByText(expectedTextFooter);
        const textElement_II = screen.getByText(expectedTextPT);
        const textElement_III = screen.getByText(expectedTextEN);
    
        expect(textElement_I).toBeInTheDocument();
        expect(textElement_II).toBeInTheDocument();
        expect(textElement_III).toBeInTheDocument();
    
    })
})