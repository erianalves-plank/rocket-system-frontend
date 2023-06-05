import { Meta, StoryObj } from '@storybook/react';
import { ItemsSelect, PropsComponent } from "../ItemsSelect";
import { BrowserRouter as Router } from "react-router-dom";

export default {
    title: 'ItemsSelect',
    component: ItemsSelect,
    args: {
        options: ['Kris', 'Ashton', 'Cassandra', 'Sargovich'],
        handleReturnSelectedValues: (valuesSelected: string[]) => {
            // Function implementation here
            console.log('Executing myFunction');
          },
        /* itemsAlreadySelected?: string[]; */
    },
/*     decorators: [
        (Story) => (
            <Router>
                <Story />
            </Router>
        ),
    ], */
} as Meta<PropsComponent>

export const Default: StoryObj<PropsComponent> = {
}