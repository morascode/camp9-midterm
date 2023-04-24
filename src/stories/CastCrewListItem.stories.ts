import { Meta, StoryObj } from '@storybook/react';
import CastCrewListItem from '../components/CastCrewListItem';

const meta: Meta<typeof CastCrewListItem> = {
  title: 'CastCrewListItem',
  component: CastCrewListItem,
  parameters: {
    viewport: {
      defaultViewport: 'mobile1',
    },
  },
};

export default meta;
type Story = StoryObj<typeof CastCrewListItem>;

export const Default: Story = {
  args: {
    url: 'https://image.tmdb.org/t/p/original/ewNO5cjiCa3d1qKnPhrapyz58od.jpg',
    actorName: 'some man',
    character: 'some role',
  },
};
