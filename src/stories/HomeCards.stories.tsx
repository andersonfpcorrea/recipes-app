import { ComponentStory, ComponentMeta } from '@storybook/react'
import HomeCards from '../components/HomeCards'
import '../style/style.css'

export default {
  title: 'Components/HomeCards',
  component: HomeCards,
  argTypes: {
    onClick: dispatchEvent,
  },
} as ComponentMeta<typeof HomeCards>

const Template: ComponentStory<typeof HomeCards> = (args) => (
  <HomeCards {...args} />
)

export const Default = Template.bind({})
