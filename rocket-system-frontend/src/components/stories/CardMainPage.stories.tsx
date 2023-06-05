import { Meta, StoryObj } from '@storybook/react';
import { CardMainPage, DataMainPage } from "../CardMainPage";
import { BrowserRouter as Router } from "react-router-dom";

export default {
    title: 'CardMainPage',
    component: CardMainPage,
    decorators: [
        (Story) => (
            <Router>
                <Story />
            </Router>
        ),
    ],
} as Meta<DataMainPage>

export const Rocket: StoryObj<DataMainPage> = {
    args: {
        id: 1,
        name: 'Rocket',
        img: '/imgs/rocket.png',
        description: 'Our Rocket',
        redirect: '/rocket'

    },
}
export const Crewman: StoryObj<DataMainPage> = {
    args: {
        id: 2,
        name: 'Crewman',
        img: '/imgs/mission.png',
        description: 'Our crewman',
        redirect: '/crewman'

    },
}
export const Crew: StoryObj<DataMainPage> = {
    args: {
        id: 3,
        name: 'Crew',
        img: '/imgs/service.png',
        description: 'Our crew',
        redirect: '/crew'

    },
}
export const Launch: StoryObj<DataMainPage> = {
    args: {
        id: 4,
        name: 'Launch',
        img: '/imgs/rocket_launch.png',
        description: 'Our Launch',
        redirect: '/launch'

    },
}