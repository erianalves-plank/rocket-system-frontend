import React from 'react'
import { FormCrew } from '../../src/components/forms/FormCrew'
import { CrewDTO } from '../../src/dtos/CrewDTO'
import { CardContent } from '../../src/components/cardContent/CardContent'
import { CardContentCrew } from '../../src/components/cardContent/CardContentCrew'
import { CardMainPage } from '../../src/components/CardMainPage'
import { MemoryRouter } from 'react-router-dom'

describe('CrewModal.cy.tsx', () => {
    it('playground', () => {
        const dataCard = {
            id: 2,
            name: 'Crewman',
            img: '/imgs/mission.png',
            description: `Cupcake ipsum dolor sit amet sweet I love halvah fruitcake. I love tiramisu jelly beans danish lollipop
            cotton candy soufflé cheesecake wafer. I love sugar plum chocolate cake muffin shortbread toffee wafer
            gingerbread jelly.`,
            redirect: '/crewman',
        }

        cy.mount(
            <MemoryRouter>
                <CardMainPage
                    id={dataCard.id}
                    name={dataCard.name}
                    img={dataCard.img}
                    description={dataCard.description}
                    redirect={dataCard.redirect}
                />
            </MemoryRouter>
        );

        cy.get('[data-cy=link-tag]').click();
        cy.url().should('not.include', '/destination');
        cy.get('[data-cy=card-main-page-title]').should('contain', dataCard.name);
        cy.get('[data-cy=card-main-page-paragraph]').should('contain', dataCard.description);

        cy.get('img[data-cy=card-main-page-image]').should('have.attr', 'src', dataCard.img);
        cy.get('img[data-cy=card-main-page-image]').should('exist');
        cy.get('img[data-cy=card-main-page-image]').should('be.visible');
    })
})