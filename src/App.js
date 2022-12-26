import React from "react";
import { TextDiv, Radio, Flex, TextSelect } from "./components";
import { GlobalStyle } from "./utils";
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
    () => ["NOME", "ENDEREÇO", "CARGO", "CEP", "TEL 1", "TEL 2"],
    []
  );
  const refs = React.useRef([]);
  const [image, setImage] = React.useState(grupoImg);
  return (
    <React.Fragment>
      <GlobalStyle img={image} />
      {fields.map((fieldName, key) => {
        return (
          <React.Fragment key={key}>
            <TextDiv
              ref={(element) => refs.current.push(element)}
              fieldName={fieldName}
            />
          </React.Fragment>
        );
      })}
      <Flex>
        <Radio title="Empresa:" items={items} handle={setImage} name="logos" />
        <TextSelect refs={refs.current} />
        <Radio title="QR Code:" items={options} handle={() => {}} name="QR" />
      </Flex>
    </React.Fragment>
  );
}

export default App;
