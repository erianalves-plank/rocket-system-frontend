import { Meta, StoryObj } from '@storybook/react';
import { CardContentCrewman, DataCrewman } from "../cardContent/CardContentCrewman";

export default {
    title: 'Content-Cards/CardContentCrewman',
    component: CardContentCrewman,
} as Meta<DataCrewman>

export const Crewman_I: StoryObj<DataCrewman> = {
    args: {
        id: '1',
        name: 'Sergei',
        patent: 'Midfield',
        onClick: () => {
            console.log('Crewman Clicked');
        },
    },
}
export const Crewman_II: StoryObj<DataCrewman> = {
    args: {
        id: '2',
        name: 'Larvich',
        patent: 'Backguard',
        onClick: () => {
            console.log('Crewman Clicked');
        },
    },
}