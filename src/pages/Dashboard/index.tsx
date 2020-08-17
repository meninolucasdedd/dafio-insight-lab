import React, { useState, useEffect, FormEvent } from 'react';
import { Link } from 'react-router-dom'
import api from '../../services/api';

import logoImg from '../../assets/octocat.svg';
import logo from '../../assets/logo.png'
import {
  FiChevronRight,
  FiGithub,
  FiSearch,
  FiAlertTriangle,
  FiLoader
} from 'react-icons/fi';


import {
  ButtonSubmit,
  Title,
  Subtitle,
  Form,
  Jobs,
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
  const [loading, setLoading] = useState(false);
  const [newRepo, setNewRepo] = useState('');
  const [inputError, setInputError] = useState('');
  const [jobs, setJobs] = useState<Repository[]>(() =>{
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
        JSON.stringify(jobs),
      );
    }, [jobs]);



  async function handleAddJobs( event: FormEvent<HTMLFormElement>):
   Promise<void>{

      event.preventDefault();


    if(!newRepo){
      setInputError('OPS! Você precisa inserir o título/descrição da vaga para pesquisar. Tente novamente!');
      return;
    }

    setLoading(true);

    try {
      const response = await api.get(`positions.json?description=${newRepo}`,
        {
          headers:{
            'Content-Type':'application/json',

            'Access-Control-Allow-Origin': '*'
        }
      });

      const repository = response.data;

      setJobs(repository.concat(jobs));

      console.log(response.data);


      setNewRepo('');
      setInputError('');

    } catch(err){

      if(err === 404){
        setInputError('Limite da api atingido')
      }
      else{
        setInputError('Erro na busca por este termo')
      }

    }

      setLoading(false);
  }

  return(
    <>
      <img src={logo} alt="Github Logo"/>
      <Title>Busque uma oportunidade de emprego em tecnologia</Title>

      <Form hasError={!!inputError} onSubmit={handleAddJobs}>
          <input
            value={newRepo}
            onChange={ (e) => setNewRepo(e.target.value)}
            placeholder="Pesquise por título, benefícios, empresas, expertise"/>

          <ButtonSubmit  disabled ={loading} loading={loading}  >
              {loading ? (<FiLoader size={30} color="#fff"/>):
                (
                  <>
                     <FiSearch size={20}/>
                     Pesquisar
                  </>
                )
              }
          </ButtonSubmit>

      </Form >

        <br></br>
        { inputError && <Error><FiAlertTriangle size={30}/>{inputError}</Error>}

      <Jobs>
          <Subtitle>
            <FiGithub size={35}/>
            Resultados da sua pesquisa
          </Subtitle>

              {jobs.map( repository =>(
                <Link key={repository.id} to={`/job/${repository.id}`}>
                  <img
                    src={repository.company_logo}
                    alt="companhiaLogo"
                  />
                  <div>
                    <strong>{repository.title}</strong>
                    <p>{repository.company}</p>
                    <p>Tipo da vaga:
                      <strong className="typeJob"> {repository.type}</strong>
                    </p>
                    <p>{repository.location}</p>
                      <p>Dinponível desde: <strong>{repository.created_at}</strong></p>
                  </div>
                <FiChevronRight  size={25}/>
              </Link>
        ))}
      </Jobs>

      <Footer>
          <div>
          <img src={logoImg} alt="Github Logo"/>
            <a href='https://jobs.github.com/post'>
              <button type="submit" >
                Publique no GitJobs
              </button>
            </a>

            <Link to={'/api'}>
              <button type="submit" >
                Documentação API
              </button>
            </Link>
            <Link to={'/howitwork'}>
              <button type="button" >
                How It Works
              </button>
            </Link>
          </div>
      </Footer>

    </>
  )
}

export default Dasboard;
