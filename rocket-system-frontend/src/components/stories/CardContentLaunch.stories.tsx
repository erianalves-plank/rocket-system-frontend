import { Meta, StoryObj } from '@storybook/react';
import { CardContentLaunch, DataLaunch } from "../cardContent/CardContentLaunch";

export default {
    title: 'Content-Cards/CardContentLaunch',
    component: CardContentLaunch,
} as Meta<DataLaunch>

export const Launch_I: StoryObj<DataLaunch> = {
    args: {
        id: '1',
        launchCode: 'CCF100',
        date: '12/09/99',
        success: true,
        rocket: { id: '1', name: 'Karkovich' },
        crew: { id: '1', name: 'Mars III', crewmen: [] },
        onClick: () => {
        },
    }
}
export const Launch_II: StoryObj<DataLaunch> = {
    args: {
        id: '2',
        launchCode: 'MAF564',
        date: '11/05/11',
        success: false,
        rocket: { id: '2', name: 'Denver' },
        crew: { id: '2', name: 'Monn VII', crewmen: [] },
        onClick: () => {
        },
    },
}