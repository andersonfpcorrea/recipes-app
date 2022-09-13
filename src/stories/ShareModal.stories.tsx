import React, { Dispatch } from 'react'
import ShareModal from '../components/ShareModal'
import '../style/style.css'

export default {
  title: 'Components/ShareModal',
  component: ShareModal,
}

const Template = (args: {
  closeModal: Dispatch<(prev: boolean) => boolean>
}) => <ShareModal {...args} />

export const Default = Template.bind({})
