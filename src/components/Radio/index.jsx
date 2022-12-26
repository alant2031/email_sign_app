import React from 'react'
import { Container } from './styled'

const RadioComp = ({title, items, handle, name}) => {
  return (
    <Container>
			<p>{title}</p>
			{items.map((item, index) => {
				return (
					<React.Fragment key={item.id}>
						<input type="radio" id={item.id} name={name} value={item.value} onChange={() => handle(item.value)}/>
						<label htmlFor={item.id}>{item.text}</label><br/>
					</React.Fragment>
				)
			})} 
		</Container>
  )
}

export const Radio = React.memo(RadioComp)