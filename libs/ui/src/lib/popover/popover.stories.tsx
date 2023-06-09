import { ComponentStory } from '@storybook/react';
import { More } from '../icons';
import { Popover as PopoverIcon } from './popover';

export default {
  title: 'Components/Popover',
  component: PopoverIcon,
};

const Template: ComponentStory<typeof PopoverIcon> = (args) => <PopoverIcon {...args} />;

export const Popover = Template.bind({});
Popover.args = {
  trigger: <div>
    <More className='rotate-90' size={24} />
  </div>,
  children: <div>
    Hello
  </div>
};
