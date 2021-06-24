import { ComponentStory, ComponentMeta } from '@storybook/react';
import { createRef } from 'react';

import Button from '../../components/Button/Button';

export default {
  title: 'Example/Button',
  component: Button,
  argTypes: {
    backgroundColor: { control: 'color' },
  },
} as ComponentMeta<typeof Button>;

const reference = createRef<HTMLAnchorElement>();

const Template: ComponentStory<typeof Button> = ({ text }) => (
  <Button ref={reference} text={text} />
);

export const Primary = Template.bind({});
Primary.args = { text: 'Click me' };
