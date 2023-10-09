import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
 :root {
    --main-color : #081b27;
    --secondary-color: #172c3a;
    --nav-color:#0c2738;
    --color-white:#fff;
    --light-gray:#899ead;
    --orange-color:#f1b722;
    --transation : all 0.3s linear;
 }

 html {
    font-size: 62.5%;
 }

 .active{
   color:var(--color-white) !important;
   transition: width 0.3s ease-in;
   position: relative;
 }

 .active::after {
  content: "";
  position: absolute;
  top: 40px;
  background-color: var(--orange-color);
  width: 100%;
  height: 2px;
 }

 @media (max-width:980px) {
  .active::after {
  top: 25px;
 }
 }
 body {
   background-color: var(--main-color);
   font-family: 'Catamaran', sans-serif;
   color:var(--color-white);
   margin: 0;
 }

 ul {
   list-style: none;
 }

`

export default GlobalStyle;