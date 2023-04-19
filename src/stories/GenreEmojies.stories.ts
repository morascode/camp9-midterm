import type { Meta, StoryObj } from '@storybook/react';

import GenreIconButton from '../components/genre/genres_selection/GenreIconButton';

const meta: Meta<typeof GenreIconButton> = {
  title: 'Emojies Button',
  component: GenreIconButton,
  parameters: {
    viewport: {
      defaultViewport: 'mobile1',
    },
  },
};

export default meta;
type Story = StoryObj<typeof GenreIconButton>;

export const Emojie: Story = {
  args: {
    emoji: '🧨',
    genre: 'Action',
    id: 1,
    counter: 0,
  },
};
export const Emojies: Story = {
  args: {
    emoji: '🤣',
    genre: 'Comedy',
    id: 4,
    counter: 0,
  },
};
