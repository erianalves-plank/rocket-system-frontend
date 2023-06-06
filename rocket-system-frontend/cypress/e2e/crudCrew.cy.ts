describe('Testing the Crew page with all the operations', () => {

    it('Create a crew', () => {
        const crewName = 'Destroyed Moon';

        cy.visit('http://localhost:5173/');

        cy.get('[data-cy="card-main-page-1"]').get('p').eq(2).contains('Check More').click();

        cy.url().should('include', '/crew');

        cy.get('[data-cy="div-content-crew"]').children().should('have.length', 8);

        cy.get('[data-cy="button-add"]').click();

        cy.get('[data-cy="name-field-crew"]').type(crewName).should('have.value', crewName);


        cy.get('[data-cy=select-item]').click();

        cy.get('.rc-virtual-list-holder').first().click();
        cy.get('.rc-virtual-list-holder').first().click();
        cy.get('.rc-virtual-list-holder').first().click();

        cy.get('[data-cy=select-item]').click();

        cy.get('[data-cy="submit-button-crew"]').click();

        cy.get('[data-cy="div-content-crew"]').children().should('have.length', 9);

        cy.get('[data-cy="crew-page"]').find('p').contains(crewName).should('exist');
    })
    it('Edit a crew', () => {
        let crewName = 'Destroyed Moon';

        cy.visit('http://localhost:5173/');

        cy.get('[data-cy="card-main-page-1"]').get('p').eq(2).contains('Check More').click();

        cy.url().should('include', '/crew');

        cy.get('[data-cy="div-content-crew"]').children().should('have.length', 9);

        cy.get('[data-cy="crew-page"]').find('p').contains(crewName).should('exist');
        cy.get('[data-cy="crew-page"]').find('p').contains(crewName).click();

        cy.get('[data-cy="button-edit"]').click();

        crewName = 'Rising Mars';
        cy.get('[data-cy="name-field-crew"]').clear();
        cy.get('[data-cy="name-field-crew"]').type(crewName).should('have.value', crewName);


        cy.get('[data-cy=select-item]').click();

        cy.get('.rc-virtual-list-holder').first().click();

        cy.get('[data-cy=select-item]').click();

        cy.get('[data-cy="submit-button-crew"]').click();

        cy.get('[data-cy="div-content-crew"]').children().should('have.length', 9);

        cy.get('[data-cy="crew-page"]').find('p').contains(crewName).should('exist');
    })
    it('Delete a crew', () => {
        const crewName = 'Rising Mars';

        cy.visit('http://localhost:5173/');

        cy.get('[data-cy="card-main-page-1"]').get('p').eq(2).contains('Check More').click();

        cy.url().should('include', '/crew');

        cy.get('[data-cy="div-content-crew"]').children().should('have.length', 9);

        cy.get('[data-cy="crew-page"]').find('p').contains(crewName).should('exist');
        cy.get('[data-cy="crew-page"]').find('p').contains(crewName).click();

        cy.get('[data-cy="button-delete"]').click();

        cy.get('[data-cy="div-content-crew"]').children().should('have.length', 8);

        cy.get('[data-cy="crew-page"]').find('p').should('not.contain', crewName);
    })

})
