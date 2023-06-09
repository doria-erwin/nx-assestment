import { ComponentStory } from '@storybook/react';
import { Button } from '@ui-components';
import Spinner from '../spinner/spinner';
import { PageHeader as PageHeaderComponent } from './page-header';

export default {
  title: 'Components/PageHeader',
  component: PageHeaderComponent,
};

const Template: ComponentStory<typeof PageHeaderComponent> = (args) => <PageHeaderComponent {...args} />;

export const PageHeader = Template.bind({});
PageHeader.args = {
  title: 'Page Title',
  leftAction: <Spinner />,
  rightAction: <Button label='button' onClick={() => alert('hello')} />
};
