import React from 'react'
import QR from 'qrcode.react'

export const QRCode = ({ value: { href } }) => {
  return <QR value={href} />
}
