describe('Testing the Crewman page with all the operations', () => {

    it('Create a crewman', () => {
        const crewmanName = 'Sargovich';
        const crewmanPatent = 'Patrol Leader';

        cy.visit('http://localhost:5173/');

        cy.get('[data-cy="card-main-page-1"]').get('p').eq(1).contains('Check More').click();

        cy.url().should('include', '/crewman');

        cy.get('[data-cy="div-content-crewman"]').children().should('have.length', 12);
        
        cy.get('[data-cy="button-add"]').click();
        
        cy.get('[data-cy="name-field-crewman"]').type(crewmanName).should('have.value', crewmanName);
        cy.get('[data-cy="patent-field-crewman"]').type(crewmanPatent).should('have.value', crewmanPatent);
        
        cy.get('[data-cy="submit-button-crewman"]').click();
       
        cy.get('[data-cy="div-content-crewman"]').children().should('have.length', 13);
        
        cy.get('[data-cy="crewman-page"]').find('p').contains(crewmanName).should('exist');
        cy.get('[data-cy="crewman-page"]').find('p').contains(crewmanPatent).should('exist');
    })
    it('Edit a crewman', () => {
        let crewmanName = 'Sargovich';
        let crewmanPatent = 'Patrol Leader';

        cy.visit('http://localhost:5173/');

        cy.get('[data-cy="card-main-page-1"]').get('p').eq(1).contains('Check More').click();

        cy.url().should('include', '/crewman');

        cy.get('[data-cy="div-content-crewman"]').children().should('have.length', 13);
        
        cy.get('[data-cy="crewman-page"]').find('p').contains(crewmanName).should('exist');
        cy.get('[data-cy="crewman-page"]').find('p').contains(crewmanPatent).should('exist');
        cy.get('[data-cy="crewman-page"]').find('p').contains(crewmanName).click();

        cy.get('[data-cy="button-edit"]').click();
        
        cy.get('[data-cy="name-field-crewman"]').clear();
        cy.get('[data-cy="patent-field-crewman"]').clear();

        crewmanName = 'Santaray';
        crewmanPatent = 'Night Guard';

        cy.get('[data-cy="name-field-crewman"]').type(crewmanName).should('have.value', crewmanName);
        cy.get('[data-cy="patent-field-crewman"]').type(crewmanPatent).should('have.value', crewmanPatent);
        
        cy.get('[data-cy="submit-button-crewman"]').click();
       
        cy.get('[data-cy="div-content-crewman"]').children().should('have.length', 13);
        
        cy.get('[data-cy="crewman-page"]').find('p').contains(crewmanName).should('exist');
        cy.get('[data-cy="crewman-page"]').find('p').contains(crewmanPatent).should('exist');
    })
    it('Delete a crewman', () => {
        const crewmanName = 'Santaray';
        const crewmanPatent = 'Night Guard';

        cy.visit('http://localhost:5173/');

        cy.get('[data-cy="card-main-page-1"]').get('p').eq(1).contains('Check More').click();

        cy.url().should('include', '/crewman');

        cy.get('[data-cy="div-content-crewman"]').children().should('have.length', 13);
        
        cy.get('[data-cy="crewman-page"]').find('p').contains(crewmanName).should('exist');
        cy.get('[data-cy="crewman-page"]').find('p').contains(crewmanPatent).should('exist');
        cy.get('[data-cy="crewman-page"]').find('p').contains(crewmanName).click();

        cy.get('[data-cy="button-delete"]').click();

        cy.get('[data-cy="div-content-crewman"]').children().should('have.length', 12);
        
        cy.get('[data-cy="crewman-page"]').find('p').should('not.contain', crewmanName);
    })
    
})
