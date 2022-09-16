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

Default.args = {
  /*👇 The args you need here will depend on your component */
  image:
    'https://www.diabetesfoodhub.org/system/user_files/Images/1837-diabetic-pecan-crusted-chicken-breast_JulAug20DF_clean-simple_061720.jpg',
  name: 'Carré com fritas',
  id: '0000',
}
