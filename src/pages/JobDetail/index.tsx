import React, { useEffect, useState } from 'react';
import { useRouteMatch, Link } from 'react-router-dom';
import { FiChevronLeft, FiChevronRight, FiMapPin, FiClock, FiUserPlus} from 'react-icons/fi';
import api from '../../services/api';

import logoVertical from '../../assets/vertical.png';

import { Header, JobInfo, Card } from './styles';


interface JobParams {
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
  how_to_aply: string;

 }

const Job: React.FC = () =>{
  const [repository, setRepository] = useState<Repository | null>(null);
  const [job, setJob] = useState([]);

  const { params } = useRouteMatch<JobParams>();

  useEffect(()=>{
      api.get(`/positions/${params.repository}.json`,
      {
        headers: {
          'Content-Type': 'application/json',
          'Access-Control-Allow-Origin': '*'
        }
      }
      ).then(response=>{
        console.log(response.data)
          setRepository(response.data)
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
      { repository && (
        <JobInfo>
         <header>
          <img src={repository.company_logo}
          alt={repository.company} />
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
              <span>{repository.location}</span>
            </li>
            <li>
              <strong>
                <FiClock size={50}></FiClock>
              </strong>
             <span>{repository.type}</span>
            </li>
        </ul>
        <Card>
          <a>
            <div>
            <strong>{repository?.description}</strong>
              <div>
                <p>A descrição vem da APU</p>
              </div>
            </div>
            <FiChevronRight  size={20}/>
          </a>
      </Card>
        </JobInfo>
      )}




    </>
  )
}

export default Job;
