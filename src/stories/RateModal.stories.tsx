import { ComponentStory, ComponentMeta } from '@storybook/react'
import RateModal from '../components/RateModal'
import '../style/style.css'

export default {
  title: 'Components/RateModal',
  component: RateModal,
} as ComponentMeta<typeof RateModal>

const Template: ComponentStory<typeof RateModal> = () => <RateModal />

export const FirstStory = Template.bind({})

// FirstStory.args = {
/*👇 The args you need here will depend on your component */
// }
