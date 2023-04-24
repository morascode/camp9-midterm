import type { Meta, StoryObj } from '@storybook/react';
import MovieDetailHeader from '../components/MovieDetailHeader';

const meta: Meta<typeof MovieDetailHeader> = {
  title: 'Movie Detail Header',
  component: MovieDetailHeader,
  parameters: {
    viewport: {
      defaultViewport: 'mobile1',
    },
  },
};

export default meta;
type Story = StoryObj<typeof MovieDetailHeader>;

export const Default: Story = {
  args: {
    children: 'Movie Detail',
    goBackTo: '/',
    svg: true,
  },
};

export const WithoutSVG: Story = {
  args: {
    children: 'Movie Detail',
    goBackTo: '/',
  },
};
