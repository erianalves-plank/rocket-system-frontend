import { Meta, StoryObj } from '@storybook/react';
import { ButtonsManageResource, ChildComponentProps } from "../ButtonsManageResource";
import { I18nextProvider } from "react-i18next";
import { withI18n } from "storybook-addon-i18n";
import {i18n} from "../../i18n/i18n"

export default {
    title: 'ButtonsManageResource',
    component: ButtonsManageResource,
    args: {
        handleClick: (operation: string) => {
            // Function implementation here
            console.log('Executing myFunction');
        },
        handleClickDelete: () => {
            // Function implementation here
            console.log('Executing myFunction');
        },
    },
    decorators: [
        withI18n,
        (Story: React.ComponentType) => (
            <I18nextProvider i18n={i18n}>
                <Story />
            </I18nextProvider>
        ),
    ]

} as Meta<ChildComponentProps>

export const Default: StoryObj<ChildComponentProps> = {
}