import React from 'react'
import * as S from './styled.js'

const FlexComp = ({children}) => {
  return (
    <S.Container>{children}</S.Container>
  )
}

export const Flex = React.memo(FlexComp);