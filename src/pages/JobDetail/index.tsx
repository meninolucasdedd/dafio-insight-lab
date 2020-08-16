import React, { useEffect, useState } from 'react';
import { useRouteMatch, Link } from 'react-router-dom';
import { FiChevronLeft, FiChevronRight, FiMapPin, FiClock, FiUserPlus} from 'react-icons/fi';
import api from '../../services/api';

import logoImg from '../../assets/octocat.svg';
import logoVertical from '../../assets/vertical.png';

import { Header, JobInfo, Card } from './styles';


interface RepositoryParams {
  repository: string;

}


interface Repository {
  id: string;
  company: string;
  company_logo: string;
  company_url: string;
  location: string;
  type: string;
  description: string;

 }

const Job: React.FC = () =>{
  const [repository, setRepository] = useState<Repository | null>(null);
  const [job, setJob] = useState([]);

  const { params } = useRouteMatch<RepositoryParams>();

  useEffect(()=>{
      api.get(`${params.repository}`).then(response=>{
        console.log(response.data)
      })

      api.get(`${params.repository}/positions`).then(response=>{
        console.log(response.data)
      })
  },[params.repository])

  return(
    <>
    <Header>

      <img src={logoVertical} alt="Avatar Empresa"/>
        <Link to="/">
          <FiChevronLeft size={16}/>
            Voltar
        </Link>
    </Header>

    <JobInfo>
      <header>
        <img src="https://avatars0.githubusercontent.com/u/27828411?s=460&u=d62a87ca26c7062bb9284972dc83ca1fe926e658&v=4"
        alt="avatar" />
        <div>
          <strong>{params.repository}</strong>
          <p>Veja os detalhes da vaga abaixo</p>
        </div>
      </header>
      <ul>
      <li>
          <button>
            <strong>
              <FiUserPlus size={50}></FiUserPlus>
            </strong>
              <a href="#">Cadindatar-se</a>
          </button>
        </li>
        <li>
          <strong>
            <FiMapPin size={50} />
          </strong>
          <span>Berlim</span>
        </li>
        <li>
          <strong>
            <FiClock size={50}></FiClock>
          </strong>
          <span>Full Time</span>
        </li>
      </ul>
    </JobInfo>
    <Card>
    <a>
      <div>
        <strong>Descrição da vaga</strong>
        <div>
          <p>A descrição vem da APU</p>
        </div>
      </div>

      <FiChevronRight  size={20}/>
    </a>
    </Card>
    </>
  )
}

export default Job;
