import { Meta, StoryObj } from '@storybook/react';
import CastCrewButton from '../components/CastCrewButton';

const meta: Meta<typeof CastCrewButton> = {
  title: 'CastCrewButton',
  component: CastCrewButton,
  parameters: {
    viewport: {
      defaultViewport: 'mobile1',
    },
  },
};

export default meta;
type Story = StoryObj<typeof CastCrewButton>;

export const Default: Story = {
  args: {
    children: 'Cast',
  },
};

export const Active: Story = {
  args: {
    children: 'Cast',
    status: 'active',
  },
};

export const Passive: Story = {
  args: {
    children: 'Crew',
    status: 'passive',
  },
};
