import copy from 'clipboard-copy'
import { useState } from 'react'
import { PropsModal } from '../utils/interfaces'

function ShareModal(props: PropsModal) {
  const { closeModal } = props
  const link = window.location.href
  const [copied, setCopied] = useState(false)

  return (
    <div
      className="share-modal flex flex-col"
      onClick={(e) => e.stopPropagation()}
    >
      <div className="flex flex-jc-sb">
        <span></span>
        <span onClick={() => closeModal((prev) => !prev)}>x</span>
      </div>
      <div className="flex flex-col flex-gap-10">
        <h3 className="fs-18">Recipe Link</h3>
        <p className="fs-12 color-grey-dark-1 ">
          Copy the recipe link and share it with friends and family.
        </p>
        <div
          className={`share-modal__link-bar flex flex-jc-sb flex-align flex-gap-04 ${
            copied ? 'off' : 'on'
          }`}
        >
          <p className="fs-10">{link}</p>
          <button
            type="button"
            className="share-modal__btn"
            onClick={() => {
              void copy(link)
              setCopied(true)
              setTimeout(() => closeModal(() => false), 1500)
            }}
          >
            Copy link
          </button>
        </div>
        <div
          className={`share-modal__link-bar flex flex-jc-sb flex-align ${
            copied ? 'on' : 'off'
          } on-link`}
        >
          <span className="fs-12">Link copied! 😃</span>
        </div>
      </div>
    </div>
  )
}

export default ShareModal
