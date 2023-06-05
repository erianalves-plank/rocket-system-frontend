import { Meta, StoryObj } from '@storybook/react';
import { NavbarContentPages, PropsType } from "../NavbarContentPages";
import { BrowserRouter as Router } from "react-router-dom";

export default {
    title: 'NavbarContentPages',
    component: NavbarContentPages,
    decorators: [
        (Story) => (
            <Router>
                <Story />
            </Router>
        ),
    ],
} as Meta<PropsType>

export const Rocket: StoryObj<PropsType> = {
    args: {
        entityType: 'Rocket'
    },
}
export const Crewman: StoryObj<PropsType> = {
    args: {
        entityType: 'Crewman'
    },
}
export const Crew: StoryObj<PropsType> = {
    args: {
        entityType: 'Crew'
    },
}
export const Launch: StoryObj<PropsType> = {
    args: {
        entityType: 'Launch'
    },
}