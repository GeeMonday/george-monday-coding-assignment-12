import type { Meta, StoryObj } from '@storybook/react';
import Button, { ButtonProps } from './Button';  // Import ButtonProps
import { action } from '@storybook/addon-actions';

// Define the meta object
const meta: Meta<ButtonProps> = {
  title: 'ReactComponentLibrary/Button',
  component: Button,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  args: {
    onClick: action('clicked'), // Log the onClick action in the Storybook Actions panel
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

// Define stories
export const Primary: Story = {
  args: {
    label: 'HelloWorld',
  },
};

export const Secondary: Story = {
  args: {
    label: 'Button',
    size: "medium"
  },
};

export const Large: Story = {
  args: {
    size: 'large',
    label: 'Button',
  },
};

export const Small: Story = {
  args: {
    size: 'small',
    label: 'Button',
  },
};
