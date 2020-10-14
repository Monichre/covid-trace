import React from 'react'
import QR from 'qrcode.react'
import { Modal } from '@geist-ui/react'
import { uploadImage } from '../../services/upload.service'
import { Auth } from 'aws-amplify'

export interface QrCodeModalProps {
  open: boolean
  closeHandler: () => void
  saveQrCode: (qrLink) => void
  venueName?: unknown
}

export const QrCodeModal: React.SFC<QrCodeModalProps> = ({
  open,
  closeHandler,
  saveQrCode,
  venueName,
}) => {
  const fileName = 'qr.png'

  const saveQR = async (Body) => {
    const Key = encodeURIComponent(`${venueName}/qrCodes/${fileName}`)
    await Auth.currentCredentials().then(async (authStatus) => {
      const { url } = await uploadImage({ Key, Body })
      console.log('url: ', url)

      if (url) {
        saveQrCode(url)
      }
    })
  }

  const downloadQR = async () => {
    const canvas = document.getElementById('qr')
    const link = document.getElementById('qrDownload')

    // @ts-ignore
    const pngUrl = canvas.toDataURL('image/png')
    const pngStream = pngUrl.replace('image/png', 'image/octet-stream')

    link.setAttribute('download', fileName)
    link.setAttribute('href', pngStream)

    await saveQR(pngStream)
  }

  return (
    <Modal open={open} onClose={closeHandler}>
      <Modal.Title>{venueName} Guest Registration QR Code</Modal.Title>

      <Modal.Content style={{ margin: 'auto' }}>
        <QR value={`/venues/${venueName}/guest-registration`} id='qr' />
      </Modal.Content>
      <Modal.Action>
        <a id='qrDownload' onClick={downloadQR}>
          Save & Download
        </a>
      </Modal.Action>
      <Modal.Action passive onClick={closeHandler}>
        Cancel
      </Modal.Action>
    </Modal>
  )
}
