import React, { useEffect, useState } from 'react';
import { useRouteMatch, Link } from 'react-router-dom';
import { FiChevronLeft, FiChevronRight, FiMapPin, FiClock, FiUserPlus} from 'react-icons/fi';
import api from '../../services/api';

import logoImg from '../../assets/octocat.svg';
import logo from '../../assets/logo.png'
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

      <img src={logo} alt="Avatar Empresa"/>
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
          <p>Descrição da vaga</p>
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
          <p>Wir bauen mit Thermondo ein besonderes Unternehmen. Wir sind der klare Innovator und First-Mover in unserem Markt. Wir haben starke Gesellschafter und sind gut finanziert. Wir sind ein dynamisches Startup mit starkem Wachstum. Bei uns findest Du ein tolles Arbeitsumfeld in einer besonderen Unternehmenskultur, in der Dein Talent und Deine Persönlichkeit einen Platz finden. In flachen Strukturen arbeitet bei uns ein aufgeschlossenes und motiviertes Team. Wir sind alle mit Leidenschaft dabei, erwarten dasselbe von Dir und freuen uns auf Deine Unterstützung.</p>↵<p><strong>We're looking for</strong></p>↵<p>... a (Senior) Python Developer / Software Engineer (m/f/d) in Berlin who will join our international tech team as soon as possible in creating one of the fastest growing companies in the heating market.</p>↵<p><strong>About us</strong></p>↵<p>Thermondo was founded in 2012 to advance the energy revolution with innovative heating solutions. More than 16,000 heating-system transformations later, we are not only No. 1 in heating system construction, but have also made a lasting difference to the heating market. We are the pioneer and innovation leader in the digitalisation of the trade. The basis for this is the resourceful teamwork of our tech, marketing, sales, development, IT and HR experts. With passion and verve, they fulfill our vision of &lt;2° (less than two degrees).</p>↵<p><strong>What we offer</strong></p>↵<ul>↵<li>Full time or part time, permanent contract.</li>↵<li>Plenty of opportunities for new ideas and responsibilities.</li>↵<li>Any tech equipment you need (Mac/Linux/Windows).</li>↵<li>Flexible working hours and a professional development environment.</li>↵<li>The possibility to work 3 days a week in your mobile office.</li>↵<li>An international team, team-building events and 30 days of vacation.</li>↵<li>Your work has a direct impact on the German energy market.</li>↵<li>Regular feedback as an integral part of employee development (e. g. paid educational leave, conference budget etc.).</li>↵</ul>↵<p><strong>Our stack</strong></p>↵<p>We are mainly using Python along with Django or Wagtail connected to PostgreSQL. We also have some JavaScript applications written in Typescript using ReactJS.  You even find some exotic things like LaTeX in our stack.↵Most of our hosting is done on Heroku. We’re trying to make use of a lot of Heroku’s tools like pipelines, backups, buildpacks and some monitoring plugins. We try to keep DevOps work to a minimum since we want to focus on building and shipping functionality. We are using some AWS services like S3.</p>↵<p><strong>Your tasks</strong></p>↵<p>Our Python based backend is the backbone of our Germany wide operation and key to the digitization of the energy business. It’s an enterprise-grade application which connects our own services to third party platforms like Salesforce.</p>↵<p>Our business is constantly growing and changing. New feature requests or requirement changes may emerge every day. As a result we build software that is highly maintainable to satisfy those needs. Your job will be to work in small teams on independent projects alongside your non technical colleagues. You will analyze our business needs and implement solutions while maintaining a high quality standard and developing at startup speed. You will have the freedom to use any tools and resources to achieve your goals. Our team of more than ten experienced engineers will support you to reach your full potential. For more information visit: <a href="http://t3u1.mjt.lu/lnk/AUgAAAf06nMAAAAAAAAAAG3sWXAAAAAA-nQAAAAAAAZPNgBfGt9gqIsxRLCkSoi9-mTTpiJ8nAAGCXo/2/ou_CfSrhP8Oa6LWPKirzcg/aHR0cHM6Ly90aGVybW9uZG8uZ2l0aHViLmlvLw">https://thermondo.github.io</a></p>↵<p><strong>Your profile</strong></p>↵<ul>↵<li>University degree in a technical field, or a comparable qualification</li>↵<li>Relevant experience in programming and web technology</li>↵<li>Very good understanding of back-end technologies – Python or JavaScript</li>↵<li>Familiar in working with frameworks like Django or Celery</li>↵<li>Experience with Heroku is a plus</li>↵<li>Knowledge of version control systems - Git or SVN</li>↵<li>Experience with agile methodologies - Kanban, Scrum or similar</li>↵<li>Fluency in English. German skills are a plus but not important for this position</li>↵</ul>↵<p><strong>It's on</strong></p>↵<p>That's exactly the challenge you're looking for? We look forward to getting to know you!</p>
        </div>
      </div>

      <FiChevronRight  size={20}/>
    </a>
    </Card>
    </>
  )
}

export default Job;
