import { ComponentStory, ComponentMeta } from '@storybook/react'
import { MemoryRouter } from 'react-router-dom'
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
  <MemoryRouter>
    <HomeCards {...args} />
  </MemoryRouter>
)

export const Default = Template.bind({})

Default.args = {
  /*👇 The args you need here will depend on your component */
  image: 'https://www.themealdb.com/images/media/meals/45xxr21593348847.jpg',
  name: 'Carré com fritas',
  id: '0000',
}
