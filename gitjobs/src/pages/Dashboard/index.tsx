import React from 'react';
import logoImg from '../../assets/githubLogo.png';
import { FiChevronRight } from 'react-icons/fi';

import {Title, Form, Jobs } from './styles';
const Dasboard: React.FC = () =>{
  return(
    <>
      <img src={logoImg} alt="Github Logo"/>
      <Title>Encontre Jobs sendo ofertados </Title>

      <Form action="">
          <input placeholder="Busque por vagas"/>
          <button type="submit" >Pesquisar</button>
      </Form>

      <Jobs>
        <a href="teste">
          <img
            src="https://jobs.github.com/rails/active_storage/blobs/eyJfcmFpbHMiOnsibWVzc2FnZSI6IkJBaHBBb3VIIiwiZXhwIjpudWxsLCJwdXIiOiJibG9iX2lkIn19--04344d944b21465d33ecd7bd62098692640a8658/herman%206.jpg"
            alt="logo"
          />
          <div>
            <strong>Head of Digital UX/UI</strong>
            <p>Miele X – Full Time</p>
          </div>

          <FiChevronRight  size={20}/>
        </a>
        <a href="teste">
          <img
            src="https://jobs.github.com/rails/active_storage/blobs/eyJfcmFpbHMiOnsibWVzc2FnZSI6IkJBaHBBb3VIIiwiZXhwIjpudWxsLCJwdXIiOiJibG9iX2lkIn19--04344d944b21465d33ecd7bd62098692640a8658/herman%206.jpg"
            alt="logo"
          />
          <div>
            <strong>Head of Digital UX/UI</strong>
            <p>Miele X – Full Time</p>
          </div>

          <FiChevronRight  size={20}/>
        </a>
        <a href="teste">
          <img
            src="https://jobs.github.com/rails/active_storage/blobs/eyJfcmFpbHMiOnsibWVzc2FnZSI6IkJBaHBBb3VIIiwiZXhwIjpudWxsLCJwdXIiOiJibG9iX2lkIn19--04344d944b21465d33ecd7bd62098692640a8658/herman%206.jpg"
            alt="logo"
          />
          <div>
            <strong>Head of Digital UX/UI</strong>
            <p>Miele X – Full Time</p>
          </div>

          <FiChevronRight  size={20}/>
        </a>
      </Jobs>
    </>
  )
}

export default Dasboard;
