import { ComponentStory, ComponentMeta } from '@storybook/react'
import HomeCards from '../components/HomeCards'
import '../style/style.css'

export default {
  title: 'Components/HomeCards',
  component: HomeCards,
} as ComponentMeta<typeof HomeCards>

const Template: ComponentStory<typeof HomeCards> = () => <HomeCards />

export const Default = Template.bind({})
