/* eslint-disable react-hooks/exhaustive-deps */
import React from 'react'
import * as S from 'src/components/QRCode/styled'
// TODO: Implementar lógica para gerar qr code
// TODO: Permitir arrastar QRcode

// Talvez um Radio e button para gerar qrcode(Caso "Sim")
const QRCodeComp = ({ source, show }) => {
  const setPosition = (e) => {
    e.target.style.position = "absolute"
    e.target.style.left = e.clientX + "px"
    e.target.style.top = e.clientY + "px"
  }
  
  return (
    <S.Container draggable onDragEnd={setPosition} display={ show ? "block" : "none"}>
      <S.Image alt="QR CODE" src={source}/>
    </S.Container>
  )
}

export const QRCode = React.memo(QRCodeComp);