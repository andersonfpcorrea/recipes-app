import { ComponentStory, ComponentMeta } from '@storybook/react'
import RateModal from '../components/RateModal'
import '../style/style.css'

export default {
  title: 'Components/RateModal',
  component: RateModal,
  argTypes: {
    closeModal: () => {},
  },
} as ComponentMeta<typeof RateModal>

const Template: ComponentStory<typeof RateModal> = (args) => (
  <RateModal {...args} />
)

export const Default = Template.bind({})

Default.args = {
  /*👇 The args you need here will depend on your component */
}
