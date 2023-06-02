import { FormCrew } from '../../src/components/forms/FormCrew'
import { CrewDTO } from '../../src/dtos/CrewDTO'

describe('CrewModal.cy.tsx', () => {
  it('playground', () => {
    const crewmenList = ['Karen', 'Ash', 'Tucker', 'Kris'];
    cy.mount(<FormCrew crewmenDB={crewmenList} handleOperationCrew={function (data: Partial<CrewDTO>, crewmenNames: string[]): void {
      console.log('All fields should be with imformation by now');
    }} />)
    const crewName = 'Exploring Mars';
    const selectedCrewmen = ['Tucker', 'Kris', 'Karen', 'Ash'];

    cy.get('[data-cy=name-field-crew]').type(crewName);

    selectedCrewmen.forEach((crewman) => {
      cy.get('[data-cy=select-item]').click();
      cy.get('.rc-virtual-list-holder').contains(crewman).should('exist').click();
      cy.get('[data-cy=name-field-crew]').click();
    });

    selectedCrewmen.forEach((crewman) => {
      cy.get('[data-cy=form-item-crewmen]').should('exist').should('contain', crewman);
    });

    

    cy.window().then((win) => {
      cy.stub(win.console, 'log').as('consoleLog');
  
      cy.get('[data-cy=submit-form-crew]').click();
  
      cy.get('@consoleLog').should('be.calledWith', 'All fields should be with imformation by now');
    });
  })
})