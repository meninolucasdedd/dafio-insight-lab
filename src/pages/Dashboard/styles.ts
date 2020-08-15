import styled, { css } from 'styled-components';
import {shade} from 'polished';

interface FormProps{
  hasError: boolean;
}

export const Header = styled.header`

  display: flex;
  align-items: center;
  justify-content: space-between;

  a {
    display: flex;
    align-items: center;
    text-decoration: none;
    color: #3D3D4D;
    font-size: 25px;


    &:hover{
      color: #666;
    }

    svg{
      margin-right: 4px;
    }

    button{
      width: 210px;
      height: 70px;
      background: #04D361;
      border-radius: 5px 5px 5px 5px;
      border:0;
      color: #fff;
      font-weight: bold;
      transition: background-color 0.2s;
      cursor: pointer;

      svg{
        margin-right: 10px;
      }

      &:hover{
        background: ${shade(0.2, '#04D361')}
      }

    }
  }

`;

export const HowItWorkInfo = styled.section`
  margin-top: 70px;
  max-width: 700px;
  text-align: justify


`;
export const Title = styled.h1`
  font-size: 50px;
  color: #3A3A3A;
  max-width: 700px;
  line-height: 56px;

  margin-top: 40px;


`
export const Subtitle = styled.h2`
  font-size: 25px;
  max-width: 700px;
  line-height: 56px;
  font-family: Poppins, sans-serif;
  padding-bottom: 10px;
  color: #3D3D4D;

  svg{
    display: flex;
    align-items: center;

  }

`

export const Form = styled.form<FormProps>`
  margin-top: 40px;
  max-width: 700px;

  display: flex;

  input {
    flex: 1;
    height: 70px;
    padding: 0 24px;
    border: 0;
    border-radius: 5px 0 0 5px;
    color: #3a3a3a;
    border: 2px solid #fff;
    border-right:0;

    ${(props) => props.hasError && css`
      border-color: #E60F0C;
      font-weight: bold;
    `}

    &::placeholder{
      color: #a8a8b3;
    }
  }

  button{
    width: 210px;
    height: 70px;
    background: #470393;
    border-radius: 0px 5px 5px 0px;
    border:0;
    color: #FFF;
    font-weight: bold;
    transition: background-color 0.2s;
    cursor: pointer;


      > svg{
        flex: 1 ;
        justify-content: center;
        margin-right: 10px;
        padding-top: 2px;



      }

    &:hover{
      background: ${shade(0.2, '#470393')}
    }
  }
`

export const Error = styled.span`
  display: block;
  color: #E60F0C;
  margin-top: 8px;

`;


export const Repositories = styled.div`
  margin-top: 80px;
  max-width: 700px;

  a{
    background: #fff;
    border-radius: 5px;
    width: 100%;
    padding: 24px;
    display: block;
    text-decoration: none;
    display: flex;
    align-items: center;
    transition: transform 0.2s;

     & + a {
       margin-top: 16px;
     }

    &:hover{
     transform: translateX(10px)
    }


    img {
      width: 140px;
      height: 140px;
      border-radius: 50%;
    }

    div {
      margin: 16px;
      flex: 1;


      strong{
        font-size: 20px;
        color: #3D3D4D;
      }

      p {
        font-size: 18px;
        color: #A8A8B3;
        margin-top: 4px;
      }
    }

    svg{
      margin-left: auto;
      color: #470393;

      &:hover{
        color: ${shade(0.2, '#470393')}
      }
    }



  }
`;


export const Menu = styled.h3`
  font-size: 14px;
  color: #FFF;
  font-weight: 100;
`;

export const Footer = styled.footer`
    margin-top: 80px;
    max-width: 700px;

    div{
      background: #04D361 ;
      border-radius: 5px;
      width: 100%;
      padding: 24px;
      display: block;
      text-decoration: none;
      display: flex;
      align-items: center;
      transition: transform 0.2s;

      & + div {
       margin-top: 16px;
      }

      img {
        width: 64px;
        height: 64px;
        border-radius: 50%;
      }

      button {
        width: 210px;
        height: 70px;
        background: transparent;
        border-radius: 0px 5px 5px 0px;
        border:0;
        color: #FFF;
        font-weight: 400;
        cursor: pointer;


      }
      span{
        color: #fff;
        text-justify: center;
      }
}
`
