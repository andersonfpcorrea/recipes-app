import { ComponentStory, ComponentMeta } from '@storybook/react'
import Author from '../components/Author'
import '../style/style.css'

export default {
  title: 'Components/Author',
  component: Author,
} as ComponentMeta<typeof Author>

const Template: ComponentStory<typeof Author> = () => <Author />

export const Default = Template.bind({})
