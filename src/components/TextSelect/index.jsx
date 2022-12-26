/* eslint-disable react-hooks/exhaustive-deps */
import React from 'react'
import { Radio } from 'src/components'

const TextSelectComp = ({refs}) => {
  const colors = React.useMemo(() => [
    {text:"Branco", value: "#fff", id: "white"}, 
    {text:"Preto", value: "#000", id: "black"},
  ], [])

  const sizes = React.useMemo(() => [
    {text: "1", value: "10px", id: "T1"},
    {text: "2", value: "15px", id: "T2"},
    {text: "3", value: "20px", id: "T3"},
    {text: "4", value: "30px", id: "T4"},
    {text: "5", value: "35px", id: "T5"},
    {text: "6", value: "50px", id: "T6"}
  ], [])
  const [color, setColor] = React.useState("")
  const [size, setSize] = React.useState("")
  const [current, setCurrent] = React.useState(null)
  const inputRef = React.useRef(null)
	const handleSubmit = () => {
    current.textContent = inputRef.current.value
    inputRef.current.value = ""
    current.style.color = color
    current.style.fontSize = size
	}

	const handleChange = ({target}) => {
    setCurrent(refs[target.value])
	}

  React.useEffect(() => {
    setCurrent(refs[0])
  }, [])
  return (
    <div>
			<label htmlFor="cars">Selecione o campo:</label>
			<select name="cars" id="cars" onChange={handleChange}>
				<option value="0">NOME</option>
				<option value="1">ENDEREÇO</option>
				<option value="2">CARGO</option>
				<option value="3">CEP</option>
				<option value="4">TEL 1</option>
				<option value="5">TEL 2</option>
			</select><br/>
      <input  type="text" placeholder="ESCREVA" ref={inputRef}/>
      <Radio title="Cor da fonte:" items={colors} handle={setColor} name="colors" />
      <Radio title="Tamanho da fonte:" items={sizes} handle={setSize} name="sizes"/>
			<br/><br/>
			<button type="button" onClick={handleSubmit}>Submit</button>
		</div>
  )
}

export const TextSelect= React.memo(TextSelectComp)