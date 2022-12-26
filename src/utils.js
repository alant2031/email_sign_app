import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
  body {
    margin: 0;
    box-sizing: border-box;
    background-image: url(${(props) => props.img});
    background-size: 100%;
    background-repeat: no-repeat;
    background-color: aqua;
    font-family: Verdana, Geneva, Tahoma, sans-serif;
  }
`;

export const setUrl = ({ name, phone, email }) => {
  const nameValues = name.split(" ");

  const [user, domain] = email.split("@");

  const baseUrl = `https://quickchart.io/qr?text=BEGIN%3AVCARD%0AVERSION%3A3.0%0AN%3A${nameValues[0]}%3B${nameValues[1]}%0ATEL%3BWORK%3BVOICE%3A${phone}%0ATEL%3BCELL%3AMobile%0ATEL%3BCELL%3AMobile%0ATEL%3BCELL%3AMobile%0ATEL%3BFAX%3A%0AEMAIL%3BWORK%3BINTERNET%3A${user}%40${domain}%0AEND%3AVCARD`;

  return baseUrl;
};
