import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import { ButtonsManageResource } from '../ButtonsManageResource';


describe('Buttons Manage Operations', () => {
  it('Rendering Buttons ', () => {
    render(<ButtonsManageResource handleClick={function (operation: string): void {
        console.log(operation);
        throw new Error('Function not implemented.');
    } } handleClickDelete={function (): void {
        throw new Error('Function not implemented.');
    } } />);

    const buttonAdd = screen.getByText('add');
    const buttonEdit = screen.getByText('edit');
    const buttonDelete = screen.getByText('delete');

    expect(buttonAdd).toBeInTheDocument();
    expect(buttonEdit).toBeInTheDocument();
    expect(buttonDelete).toBeInTheDocument();
  });
});
