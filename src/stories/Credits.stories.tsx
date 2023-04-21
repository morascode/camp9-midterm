import type { Meta, StoryObj } from '@storybook/react';
import Credits from '../pages/Credits';

const meta: Meta<typeof Credits> = {
  title: 'Credits Page',
  component: Credits,
  parameters: {
    viewport: {
      defaultViewport: 'mobile1',
    },
  },
};
export default meta;
export const Default: StoryObj<typeof Credits> = {
  args: {
    movieId: 5,
  },
};
