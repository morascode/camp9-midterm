import Ticket from "../pages/Ticket";
import type { Meta, StoryObj } from "@storybook/react";

const meta: Meta<typeof Ticket> = {
   title: "Pages/Ticket",
    component: Ticket,
    parameters: {
        viewport: {
            defaultViewport: "mobile1",
        },
    },
};

export default meta;
type Story = StoryObj<typeof Ticket>;

export const Default = () => <Ticket title="Ticket title"/>;