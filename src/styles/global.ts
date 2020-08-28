import {createGlobalStyle} from 'styled-components';

import assetsdesign from '../assets/assetsdesign.svg'


export default createGlobalStyle`

  *{

    margin:0;
    padding:0;
    outline: 0;
    box-sizing: border-box;

  }

  body{
    background: #6842C2 url(${ assetsdesign}) no-repeat 70%  top ;
    -webkit-font-smoothing: antialiased;
  }

  body, input, button{
    font: 16px Archivo, sans-serif;
  }

  #root{
    max-width: 960px;
    margin: 0 auto;
    padding: 40px 20px;

  }

  button: {
    cursor: pointer;
  }

  ::-webkit-scrollbar {
    width: 5px;
  }

  ::-webkit-scrollbar-thumb {
    -webkit-border-radius: 5px;
    border-radius: 5px;
    background: #04D361;
  }


`;
