import React, { useState, useEffect, FormEvent } from 'react';
import { FiChevronRight } from 'react-icons/fi';
import { Link } from 'react-router-dom'
import api from '../../services/api';


import logoImg from '../../assets/octocat.svg';

import {Title, Form, Repositories, Error } from './styles';
import Jobs from '../Jobs';

interface Repository {
  title: string;
  location: string;
  company: string;
  company_url: string;
  type:string;
  url: string;
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
      const response = await api.get(`positions`);

      const repository = response.data;

      setRepositories([ ...repositories, repository])
      setNewRepo('');
      setInputError('');

    } catch(err){
      setInputError('Erro na busca por este termo')
    }
  }

  return(
    <>
      <img className="logoOcto"src={logoImg} alt="Github Logo"/>
      <Title>Procure uma oportunidade de emprego</Title>

      <Form hasError={!!inputError} onSubmit={handleAddJobs}>
          <input
            value={newRepo}
            onChange={ (e) => setNewRepo(e.target.value)}
            placeholder="Busque por vagas"/>
          <button type="submit" >Pesquisar</button>
      </Form >

        { inputError && <Error>{inputError}</Error>}

      <Repositories>
        {repositories.map( repository =>(
          <Link key={repository.title} to={`/jobs/${repository.title}`}>
          <img
            src="https://i.pinimg.com/236x/dc/ef/3a/dcef3abedf0e0761203aaeb85886a6f3--jedi-knight-open-source.jpg"
            alt="logo"
          />
          <div>
            <strong>{repository.title}</strong>
            <p>{repository.company}</p>
            <p>{repository.company_url}</p>
            <p>Teste</p>

          </div>

          <FiChevronRight  size={20}/>
        </Link>
        ))}
      </Repositories>
    </>
  )
}

export default Dasboard;
