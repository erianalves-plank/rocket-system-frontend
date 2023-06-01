describe('My First Test', () => {

    it('Create a rocket', () => {
        const rocketName = 'Apollo III';
        cy.visit('http://localhost:5173/');

        cy.get('[data-cy="card-main-page-1"]').get('p').eq(0).contains('Check More').click();

        cy.url().should('include', '/rocket');

        cy.get('[data-cy="div-content-rocket"]').children().should('have.length', 12);
        
        cy.get('[data-cy="button-add-rocket"]').click();
        
        cy.get('[data-cy="name-field-rocket"]').type(rocketName).should('have.value', rocketName);
        
        cy.get('[data-cy="submit-button-rocket"]').click();
       
        cy.get('[data-cy="div-content-rocket"]').children().should('have.length', 13);
        
        cy.get('[data-cy="rocket-page"]').find('p').contains(rocketName).should('exist');
    })
    it('Edit a rocket', () => {
        let rocketName = 'Apollo III';
        cy.visit('http://localhost:5173/');

        cy.get('[data-cy="card-main-page-1"]').get('p').eq(0).contains('Check More').click();

        cy.url().should('include', '/rocket');

        cy.get('[data-cy="div-content-rocket"]').children().should('have.length', 13);
        
        cy.get('[data-cy="rocket-page"]').find('p').contains(rocketName).should('exist');
        cy.get('[data-cy="rocket-page"]').find('p').contains(rocketName).click();

        cy.get('[data-cy="button-edit-rocket"]').click();
        
        cy.get('[data-cy="name-field-rocket"]').clear();

        rocketName = 'Apollo IV';

        cy.get('[data-cy="name-field-rocket"]').type(rocketName).should('have.value', rocketName);
        
        cy.get('[data-cy="submit-button-rocket"]').click();
       
        cy.get('[data-cy="div-content-rocket"]').children().should('have.length', 13);
        
        cy.get('[data-cy="rocket-page"]').find('p').contains(rocketName).should('exist');
    })
    it('Delete a rocket', () => {
        const rocketName = 'Apollo IV';
        cy.visit('http://localhost:5173/');

        cy.get('[data-cy="card-main-page-1"]').get('p').eq(0).contains('Check More').click();

        cy.url().should('include', '/rocket');

        cy.get('[data-cy="div-content-rocket"]').children().should('have.length', 13);
        
        cy.get('[data-cy="rocket-page"]').find('p').contains(rocketName).should('exist');
        cy.get('[data-cy="rocket-page"]').find('p').contains(rocketName).click();

        cy.get('[data-cy="button-delete-rocket"]').click();

        cy.get('[data-cy="div-content-rocket"]').children().should('have.length', 12);
        
        cy.get('[data-cy="rocket-page"]').find('p').should('not.contain', rocketName);
    })
    
})
