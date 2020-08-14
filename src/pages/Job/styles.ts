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
    transition: color 0.2s;

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
      border-radius: 0px 5px 5px 0px;
      border:0;
      color: #FFF;
      font-weight: bold;
      transition: background-color 0.2s;
      cursor: pointer;
    }
  }

`;

export const JobInfo = styled.section`
    margin-top: 70px;

    header{
      display: flex;
      align-items: center;

      img{
      width: 120px;
      height: 120px;
      border-radius: 50%;
    }

    div{
      margin-left: 24px;

      strong{
        font-size: 36px;
        color: #FFF;
      }

      p {
        font-size: 18px;
        color: #fff;
        margin-top: 4px;
      }
    }
  }

  ul{
    display: flex;
    list-style: none;
    margin-top: 40px;

    li{
      & +li {
        margin-left: 80px;
      }
    }

    li {
      strong{
        display: block;
        font-size: 36px;
        color: #fff;
      }

      span{
        display: block;
        margin-top: 4px;
        color: #fff;
      }
    }

  }

`;

export const Card = styled.div`
  margin-top: 80px;


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




    div {
      margin: 16px;
      flex: 1;


      strong{
        font-size: 20px;
        color: #3D3D4D;
      }

      P {
        font-size: 18px;
        color: #A8A8B3;
        margin-top: 4px;
      }
    }

    svg{
      margin-left: auto;
      color: #cbcbd6;
    }



  }
`;
