import React, { useState, useEffect, FormEvent } from 'react';
import { FiChevronRight, FiSearch, FiFileText, FiZoomIn} from 'react-icons/fi';
import { Link } from 'react-router-dom'
import api from '../../services/api';


import logoImg from '../../assets/octocat.svg';

import {
  Title,
  Subtitle,
  Form,
  Repositories,
  Error,
  FeaturedJobs,
  Footer
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

  async function handleAddJobs(
    event: FormEvent<HTMLFormElement>
    ): Promise<void>{
      event.preventDefault();

    if(!newRepo){
      setInputError('Digite o nome da vaga para pesquisar');
      return;
    }

    try{
      const response = await api.get(`positions.json?description=${newRepo}&localtion=`,
        { headers:{
          'Content-Type':'application/json',

          'Access-Control-Allow-Origin': '*'
        }
      });

        console.log(response.data);
        console.log(repositories)

      const repository = response.data;

      setRepositories(repository.concat(repositories))
      setNewRepo('');
      setInputError('');

    } catch(err){
      setInputError('Erro na busca por este termo')
    }
  }

  return(
    <>
      <img src={logoImg} alt="Github Logo"/>
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


      <Repositories>
          <Subtitle>
           <FiZoomIn size={35}/>
           Resultado da pesquisa
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
                  <p>Vaga disponibilizada em:</p>
                  <span>{repository.created_at}</span>

                </div>

                <FiChevronRight  size={20}/>
              </Link>
        ))}
      </Repositories>

      <Footer>
          <div>
          <img src={logoImg} alt="Github Logo"/>
            <Link to={'/teste'}>
              <button type="submit" >
               All Jobs
              </button>
            </Link>
            <button type="submit" >
              Add Jobs
            </button>

            <button type="submit" >How It Works</button>
          </div>
      </Footer>

    </>
  )
}

export default Dasboard;
