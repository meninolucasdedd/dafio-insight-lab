import React, { useState, useEffect, FormEvent } from 'react';
import { FiChevronRight, FiSearch, FiFileText, FiBarChart2} from 'react-icons/fi';
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
  Menu,
  Footer
} from './styles';


interface Repository {
 id: string;
 company: string;
 company_logo: string;
 company_url: string;
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
      const response = await api.get(`positions.json?description=${newRepo}&page=1`,
        { headers:{
          'Content-Type':'application/json',

          'Access-Control-Allow-Origin': '*'
        }
      });

        console.log(response.data)

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
      <img src={logoImg} alt="Github Logo"/>
      <Title>Procure por uma oportunidade de emprego</Title>

      <Form hasError={!!inputError} onSubmit={handleAddJobs}>
          <input
            value={newRepo}
            onChange={ (e) => setNewRepo(e.target.value)}
            placeholder="Busque por vagas"/>
          <button type="submit" >
              <FiSearch size={20}/>
              Pesquisar
          </button>
      </Form >
        <br></br>
        { inputError && <Error>{inputError}</Error>}

      <FeaturedJobs>
          <Subtitle>
            <FiBarChart2 size={35}/>
            Empregos em Destaque
          </Subtitle>
      </FeaturedJobs>

      <Repositories>
          <Subtitle>
           <FiFileText size={35}/>
            Histórico de pesquisa
          </Subtitle>
              {repositories.map( repository =>(
                <Link key={repository.company} to={`/job/${repository.id}`}>
                <img
                  src="https://i.pinimg.com/236x/dc/ef/3a/dcef3abedf0e0761203aaeb85886a6f3--jedi-knight-open-source.jpg"
                  alt="logo"
                />
                <div>
                  <strong>FUNCAP</strong>
                  <p>Vaga de ReactJS</p>
                  <span>Clique para mais detalhes</span>
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
