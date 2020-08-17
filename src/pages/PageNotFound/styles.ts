import styled from 'styled-components';

export const Header = styled.header`
  display: flex;
  align-items: center;
  justify-content: space-between;

  a {
    display: flex;
    align-items: center;
    text-decoration: none;
    color: #fff;
    font-size: 25px;


    &:hover{
      color: #666;
    }

    svg{
      margin-right: 4px;
    }
  }

`;

export const PageError = styled.section`
  margin-top: 50px;
  max-width: 700px;
  text-align: center;
  > svg{
    color: #fff;
  }
`;

export const Subtitle = styled.h2`
  font-size: 50px;
  max-width: 700px;
  line-height: 80px;
  font-family: Poppins, sans-serif;
  color: #fff;



`


