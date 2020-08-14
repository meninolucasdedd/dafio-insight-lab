import React, { useEffect, useState } from 'react';
import { useRouteMatch, Link } from 'react-router-dom';
import { FiChevronLeft, FiChevronRight, FiMapPin, FiCode, FiClock, FiUserPlus} from 'react-icons/fi';
import api from '../../services/api';

import logoImg from '../../assets/octocat.svg';
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

const HowItWorks: React.FC = () =>{
  const [repository, setRepository] = useState<Repository | null>(null);
  const [job, setJob] =useState([]);

  const { params } = useRouteMatch<RepositoryParams>();

  useEffect(()=>{
      api.get(`${params.repository}`).then(response=>{
        console.log(response.data)
      })
  },[params.repository]) //eslint-disable-line

  return(
    <>
    <Header>

      <img src={logoImg} alt="Avatar Empresa"/>
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
          <strong>RocketSeat </strong>
          <p>Descrição da vaga</p>
        </div>
      </header>
      <ul>
        <li>
          <strong>
            <FiMapPin size={70} />
          </strong>
          <span>Berlim</span>
        </li>
        <li>
          <strong>
            <FiCode size={70}/>
          </strong>
          <span>ReactJs</span>
        </li>
        <li>
          <strong>
            <FiClock size={70}></FiClock>
          </strong>
          <span>Full Time</span>
        </li>

        <li>
          <strong>
            <FiUserPlus size={70}></FiUserPlus>
          </strong>
          <span>Aplicar-se</span>
        </li>
      </ul>
    </JobInfo>
    <Card>
    <Link to={"ASASA"}>
      <div>
        <strong>Descrição da vaga</strong>
        <div>
          descrição da vaga aqui
        </div>
        <div>
        Verition Fund Management is looking to hire a Senior Developer to join the Firm’s low latency trading platform team. The role is full time, and can be remote for the right candidate.

Required: -Advanced hands on C++ 11/14/17 experience developing multithreaded applications -Experience debugging with gdb -Experience writing in Python (pandas, numpy) as well as Bash and GTest -Experienced on linux systems -Familiar with git, TCP/IP, UDP, ZMQ (or other messaging libraries)

The following would be a plus: -Work experience in financial industry, specifically on low latency trading systems -Experience in market data feed handlers and order entry protocols, specifically FIX, BPIPE, etc -Familiarity with Jenkins, Ansible
        </div>
      </div>

      <FiChevronRight  size={20}/>
    </Link>
    </Card>
    </>
  )
}

export default HowItWorks;
