import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { BrowserRouter as Router } from 'react-router-dom';
import '@testing-library/jest-dom/extend-expect';
// Update with the correct theme context path
/* import { useTranslation } from 'react-i18next'; */  // Update with the correct i18n library path
import { CardMainPage, DataMainPage } from '../CardMainPage';

/* 
jest.mock("react-i18next", () => ({
    useTranslation: () => {
        const mockChangeLanguage = jest.fn();
        const mockI18n = { changeLanguage: mockChangeLanguage, language: "en" };
        return {
            t: (key: string) => key,
            i18n: mockI18n,
        };
    },
})); */

describe('CardMainPage', () => {
    const mockData: DataMainPage = {
        id: 1,
        name: 'Card Title',
        img: 'image-url',
        description: 'Card Description',
        redirect: '/redirect-url',
    };

    beforeEach(() => {
        render(
            <Router>
                <CardMainPage {...mockData} />
            </Router>
        );
    });

    test('renders card title', () => {
        const titleElement = screen.getByText('Card Title');
        expect(titleElement).toBeInTheDocument();
    });

    test('renders card image', () => {
        const imageElement = screen.getByAltText('');
        expect(imageElement).toBeInTheDocument();
        expect(imageElement).toHaveAttribute('src', 'image-url');
    }); 
/* 
    test('renders translated description', () => {
        const descriptionElement = screen.getByText('translated word');
        expect(descriptionElement).toBeInTheDocument();
    }); */

    test('renders link with correct URL', () => {
        const linkElement = screen.getByText('check more');
        expect(linkElement).toBeInTheDocument();
        expect(linkElement).toHaveAttribute('href', '/redirect-url');
    });

    test('clicking on the link redirects to the correct URL', () => {
        const linkElement = screen.getByText('check more');
        userEvent.click(linkElement);
        expect(window.location.pathname).toBe('/redirect-url');
    }); 
});
