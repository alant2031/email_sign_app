import React from "react";
import { TextDiv, Radio, Flex, TextSelect, QRCode } from "./components";
import { GlobalStyle, setUrl } from "./utils";
import grupoImg from "src/static/grupo.png";
import dafImg from "src/static/daf.png";
import agroImg from "src/static/agro.png";
import engelogImg from "src/static/engelog.png";
import asfaltosImg from "src/static/asfaltos.png";

function App() {
  const items = React.useMemo(
    () => [
      { id: "grupo", value: grupoImg, text: "GRUPO" },
      { id: "daf", value: dafImg, text: "DAF" },
      { id: "agro", value: agroImg, text: "AGRO" },
      { id: "engelog", value: engelogImg, text: "ENGELOG" },
      { id: "asfaltos", value: asfaltosImg, text: "ASFALTOS" },
    ],
    []
  );
  const options = React.useMemo(
    () => [
      { id: "1", value: 1, text: "Sim" },
      { id: "0", value: 0, text: "Não" },
    ],
    []
  );
  const fields = React.useMemo(
    () => [
      { label: "NOME", id: "full_name" },
      { label: "ENDEREÇO", id: "address" },
      { label: "CARGO", id: "role" },
      { label: "CEP", id: "zip_code" },
      { label: "EMAIL", id: "email" },
      { label: "TEL 1", id: "tel1" },
      { label: "TEL 2", id: "tel2" },
    ],
    []
  );
  const refs = React.useRef([]);
  const [showQR, setShowQR] = React.useState(false);
  const [showDiv, setShowDiv] = React.useState(true);
  const [source, setSource] = React.useState("");
  const [name, setName] = React.useState("");
  const [phone, setPhone] = React.useState("");
  const [email, setEmail] = React.useState("");
  const handleQR = React.useCallback((ev) => {
    setShowQR(ev);
  }, []);
  const generateSrc = React.useCallback((atr) => {
    const src = setUrl(atr);
    setSource(src);
    setShowDiv(false);
  }, []);
  const [image, setImage] = React.useState(grupoImg);
  return (
    <React.Fragment>
      <GlobalStyle img={image} />
      {fields.map((field, key) => {
        return (
          <React.Fragment key={key}>
            <TextDiv
              id={field.id}
              ref={(element) => refs.current.push(element)}
              fieldName={field.label}
            />
          </React.Fragment>
        );
      })}
      <QRCode show={showQR} source={source} />
      <Flex>
        <Radio title="Empresa:" items={items} handle={setImage} name="logos" />
        <TextSelect
          refs={refs.current}
          handleName={setName}
          handlePhone={setPhone}
          handleEmail={setEmail}
        />
        <div
          style={{
            display: showDiv ? null : "none",
          }}
        >
          <Radio title="QR Code:" items={options} handle={handleQR} name="QR" />
          <button
            type="button"
            disabled={!showQR}
            onClick={() => generateSrc({ name, phone, email })}
          >
            Gerar
          </button>
        </div>
      </Flex>
    </React.Fragment>
  );
}

export default App;
