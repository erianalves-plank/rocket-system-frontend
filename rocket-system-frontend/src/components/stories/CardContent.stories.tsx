import { Meta, StoryObj } from '@storybook/react';
import { CardContent, DataRocket } from "../cardContent/CardContent";

export default {
    title: 'Content-Cards/CardContent',
    component: CardContent,
} as Meta<DataRocket>

export const Rocket_I: StoryObj<DataRocket> = {
    args: {
        id: '2',
        name: 'Kraskov',
        onClick: () => {
            console.log('Rocket Clicked');
        },
    },
}
export const Rocket_II: StoryObj<DataRocket> = {
    args: {
        id: '3',
        name: 'Denver',
        onClick: () => {
            console.log('Rocket Clicked');
        },
    },
}