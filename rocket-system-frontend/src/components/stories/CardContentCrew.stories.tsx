import { Meta, StoryObj } from '@storybook/react';
import { CardContentCrew, DataCrew } from "../cardContent/CardContentCrew";

export default {
    title: 'Content-Cards/CardContentCrew',
    component: CardContentCrew,
} as Meta<DataCrew>

export const Crew_I: StoryObj<DataCrew> = {
    args: {
        id: '1',
        name: 'Exploring Mars',
        crewmen: [{id: '1', name: 'Kris', patent: 'Captain'}],
        onClick: () => {
            console.log('Crew clicked');
        },
    },
}
export const Crew_II: StoryObj<DataCrew> = {
    args: {
        id: '2',
        name: 'Searching Moonlight',
        crewmen: [{id: '1', name: 'Kris', patent: 'Captain'}, {id: '2', name: 'Sinni', patent: 'Vice-Captain'}],
        onClick: () => { 
            console.log('Crew clicked');
        },
    },
}