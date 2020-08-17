import React from 'react';
import {  Link } from 'react-router-dom';
import {FiChevronLeft, FiAlertCircle} from 'react-icons/fi';


import logoImg from '../../assets/octocat.svg';
import {
  Header,
  PageError,
  Subtitle,
} from './styles';



const PageNotFound: React.FC = () =>{
  return(
    <>
      <Header>
        <img src={logoImg} alt="Avatar Empresa"/>
        <Link to="/">
            <FiChevronLeft size={16}/>
              Voltar
        </Link>
      </Header>
      <PageError>
      <FiAlertCircle size={100}/>
        <Subtitle>
          Opa! Essa Página não existe.
        </Subtitle>
        <Subtitle> Tente novamente.</Subtitle>
    </PageError>
    </>
  )
}

export default PageNotFound;
