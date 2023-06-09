import { Meta, StoryObj } from '@storybook/react';
import { NavbarContentPages, PropsType } from "../NavbarContentPages";
import { BrowserRouter as Router } from "react-router-dom";
import { I18nextProvider } from "react-i18next";
import { withI18n } from "storybook-addon-i18n";
import { i18n } from "../../i18n/i18n"

export default {
    title: 'NavbarContentPages',
    component: NavbarContentPages,
    decorators: [
        withI18n,
        (Story: React.ComponentType) => (
            <Router>
                <I18nextProvider i18n={i18n}>
                    <Story />
                </I18nextProvider>
            </Router>
        ),
    ]
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