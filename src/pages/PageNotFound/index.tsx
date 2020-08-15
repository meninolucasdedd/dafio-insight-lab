import React from 'react';
import {  Link } from 'react-router-dom';
import {FiChevronLeft,  FiMinimize2} from 'react-icons/fi';


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
        <Subtitle>
           Essa Página não existe

        </Subtitle>
    </PageError>
    </>
  )
}

export default PageNotFound;
