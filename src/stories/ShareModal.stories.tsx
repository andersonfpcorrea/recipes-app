import { ComponentStory, ComponentMeta } from '@storybook/react'
import ShareModal from '../components/ShareModal'
import '../style/style.css'

export default {
  title: 'Components/ShareModal',
  component: ShareModal,
  argTypes: {
    closeModal: () => {},
  },
} as ComponentMeta<typeof ShareModal>

const Template: ComponentStory<typeof ShareModal> = (args) => (
  <ShareModal {...args} />
)

export const FirstStory = Template.bind({})

FirstStory.args = {
  /*👇 The args you need here will depend on your component */
  closeModal: () => {},
}
