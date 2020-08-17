import React, { useEffect, useState } from 'react';
import { useRouteMatch, Link } from 'react-router-dom';
import { FiChevronLeft,  FiMapPin, FiClock} from 'react-icons/fi';
import api from '../../services/api';

import logoVertical from '../../assets/vertical.png';

import { Header, JobInfo, Card } from './styles';


interface JobParams {
  repository: string;

}

interface Repository {
  id: string;
  title: string;
  company: string;
  company_logo: string;
  company_url: string;
  location: string;
  type: string;
  description: string;
  how_to_apply: string;

 }

const Job: React.FC = () =>{
  const [repository, setRepository] = useState<Repository | null>(null);

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

  },[params.repository]);

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
            <strong>{repository.title}</strong>
            <p>Veja os detalhes da vaga abaixo</p>
         </div>
       </header>

        <ul>
          <li>
              <button>
                <strong>
                <FiClock size={50}/>
                </strong>
                <a>{repository.type}</a>
              </button>
            </li>
            <li>
              <button>
                <strong>
                  <FiMapPin size={50} />
                </strong>
                <a>{repository.location}</a>
              </button>

            </li>
        </ul>
        <Card>
          <a>
            <div>
            <strong>Detalhes</strong>
              <div>
                <p>{repository.description}</p>
              </div>
              <hr></hr>
              <br></br>
              <strong>Como aplicar?</strong>
              <div>{repository.how_to_apply}</div>
            </div>
          </a>
      </Card>
        </JobInfo>
      )}




    </>
  )
}

export default Job;
