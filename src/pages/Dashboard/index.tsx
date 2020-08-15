import React, { useState, useEffect, FormEvent } from 'react';
import { FiChevronRight, FiGithub, FiSearch, FiCreditCard} from 'react-icons/fi';
import { Link } from 'react-router-dom'
import api from '../../services/api';

import logoImg from '../../assets/octocat.svg';
import logo from '../../assets/logo.png'

import {
  Header,
  Title,
  Subtitle,
  Form,
  Repositories,
  Error,
  Footer,
} from './styles';


interface Repository {
  id: string;
  title: string;
  company: string;
  company_logo: string;
  company_url: string;
  created_at: string;
  location: string;
  type: string;

}

const Dasboard: React.FC = () => {

  const [newRepo, setNewRepo] = useState('');
  const [inputError, setInputError] = useState('');
  const [repositories, setRepositories] = useState<Repository[]>(() =>{
  const storagedRepositories = localStorage.getItem( '@GithubJobsExplorer:repositories');


    if(storagedRepositories){
      return JSON.parse(storagedRepositories);
    }else{
      return [];
    }
  });


  useEffect(() => {
    localStorage.setItem(
      '@GithubJobsExplorer:repositories',
        JSON.stringify(repositories),
      );
  }, [repositories])



  async function handleAddJobs( event: FormEvent<HTMLFormElement>):
   Promise<void>{
      event.preventDefault();

    if(!newRepo){
      setInputError('Ops! Você precisa inserir o título/descrição da vaga para pesquisar');
      return;
    }
    try {
      const response = await api.get(`positions.json?description=${newRepo}`,
        { headers:{
          'Content-Type':'application/json',

          'Access-Control-Allow-Origin': '*'
        }
      });

      const repository = response.data;

      setRepositories(repository.concat(repositories))
      setNewRepo('');
      setInputError('');

    } catch(err){

      if(err === 400){
        setInputError('Termo não encontrado')
      }
      else{
        setInputError('Erro na busca por este termo')
      }
    }
  }

  return(
    <>
      <Header>
        <img src={logo} alt="Github Logo"/>
      </Header>

      <Title>Procure por uma oportunidade de emprego</Title>

      <Form hasError={!!inputError} onSubmit={handleAddJobs}>
          <input
            value={newRepo}
            onChange={ (e) => setNewRepo(e.target.value)}
            placeholder="Pesquise por título, benefícios, empresas, expertise"/>
          <button type="submit" >
              <FiSearch size={20}/>
              Pesquisar
          </button>
      </Form >

        <br></br>
        { inputError && <Error>{inputError}</Error>}

        <p>Veja abaixo o resultado da sua pesquisa</p>

      <Repositories>
          <Subtitle>
           <FiGithub size={35}/>
           Resultados da sua pesquisa
          </Subtitle>
              {repositories.map( repository =>(
                <Link key={repository.id} to={`/job/${repository.title}`}>
                <img
                  src={repository.company_logo}
                  alt="logo"
                />
                <div>
                  <strong>{repository.title}</strong>
                  <p>{repository.company}</p>
                  <p>Tipo da vaga: <strong className="typeJob">{repository.type}</strong></p>
                </div>

                <FiChevronRight  size={25}/>
              </Link>
        ))}
      </Repositories>

      <Footer>
          <div>
          <img src={logoImg} alt="Github Logo"/>
            <a href='https://jobs.github.com/post'>
              <button type="submit" >
                Publique no Git
              </button>
            </a>

            <Link to={'/api'}>
              <button type="submit" >
                Documentação API
              </button>
            </Link>

            <span>
              Feito com amor 😍
              <span>Por Lucas Silva 😍</span>
            </span>


          </div>
      </Footer>

    </>
  )
}

export default Dasboard;
