/* eslint-disable react-hooks/exhaustive-deps */
import React from 'react'
import { Radio } from 'src/components'
import * as S from 'src/components/TextSelect/styled'

const TextSelectComp = ({refs, handleName, handleEmail, handlePhone}) => {
  const colors = React.useMemo(() => [
    {text:"Branco", value: "#fff", id: "white"}, 
    {text:"Preto", value: "#000", id: "black"},
    {text:"Azul Escuro", value: "#25427A", id: "dark_blue"},
    {text:"Laranja", value: "#F08000", id: "tangerine"},
  ], [])

  const weights = React.useMemo(() => [
    {text:"Normal", value: "400", id: "normal"}, 
    {text:"Bold", value: "700", id: "bold"},
    {text:"Bolder", value: "900", id: "bolder"},
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
  const [weight, setWeight] = React.useState("")
  const [current, setCurrent] = React.useState(null)
  const inputRef = React.useRef(null)
	const handleSubmit = () => {
    current.textContent = inputRef.current.value
    inputRef.current.value = ""
    current.style.color = color
    current.style.fontSize = size
    current.style.fontWeight = weight
    const isName = current.id === "full_name"
    const isPhone = current.id === "tel1"
    const isEmail = current.id === "email"
    if(isName) {
      handleName(current.textContent)
      return
    }
    if(isPhone) {
      handlePhone(current.textContent)
      return
    }
    if(isEmail){
      handleEmail(current.textContent)
      return
    }
	}

	const handleChange = ({target}) => {
    setCurrent(refs[target.value])
	}

  React.useEffect(() => {
    setCurrent(refs[0])
  }, [])
  return (
    <S.Container>
			<label htmlFor="fields">Selecione o campo:</label>
			<select name="fields" id="fields" onChange={handleChange}>
				<option value="0">NOME</option>
				<option value="1">ENDEREÇO</option>
				<option value="2">CARGO</option>
				<option value="3">CEP</option>
				<option value="4">EMAIL</option>
				<option value="5">TEL 1</option>
				<option value="6">TEL 2</option>
			</select><br/>
      <S.Input type="text" placeholder="ESCREVA" ref={inputRef}/>
      <div style={{
        display: "flex",
        gap: "15px",
        border: "1px solid black"
      }}>

        <Radio title="Cor da fonte:" items={colors} handle={setColor} name="colors" />
        <Radio title="Peso da fonte:" items={weights} handle={setWeight} name="weights"/>
      </div>
      <Radio title="Tamanho da fonte:" items={sizes} handle={setSize} name="sizes"/>
			<button type="button" onClick={handleSubmit}>Submit</button>
		</S.Container>
  )
}

export const TextSelect= React.memo(TextSelectComp)