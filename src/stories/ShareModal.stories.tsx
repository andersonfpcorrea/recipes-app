import { ComponentStory, ComponentMeta } from '@storybook/react'
import ShareModal from '../components/ShareModal'
import '../style/style.css'

export default {
  title: 'Components/ShareModal',
  component: ShareModal,
} as ComponentMeta<typeof ShareModal>

const Template: ComponentStory<typeof ShareModal> = () => <ShareModal />

export const Default = Template.bind({})
