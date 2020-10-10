// @ts-nocheck
import React from 'react'

import { useState, useEffect, useRef } from 'react'
import QR from 'qrcode.react'
import { Modal } from '@geist-ui/react'

export interface QrCodeModalProps {
  open: boolean
  closeHandler: () => void
}

export const QrCodeModal: React.SFC<QrCodeModalProps> = ({
  open,
  closeHandler,
}) => {
  const fileName = 'qr.jpg'
  const [imageDataURI, setImageDataURI] = useState(null)

  const downloadQR = () => {
    const canvas = document.getElementById('qr')
    console.log('canvas: ', canvas)
    if (canvas) {
      // @ts-ignore
      const pngUrl = canvas
        .toDataURL('image/png')
        .replace('image/png', 'image/octet-stream')

      setImageDataURI(pngUrl)
    }
  }

  useEffect(() => {
    downloadQR()
  }, [])

  return (
    <Modal open={open} onClose={closeHandler}>
      <Modal.Title>Scan This</Modal.Title>

      <Modal.Content style={{ margin: 'auto' }}>
        <QR value={window.location.href} id='qr' />
      </Modal.Content>
      <Modal.Action>
        <a download={fileName} href={imageDataURI}>
          Download
        </a>
      </Modal.Action>
      <Modal.Action passive onClick={closeHandler}>
        Close
      </Modal.Action>
    </Modal>
  )
}
