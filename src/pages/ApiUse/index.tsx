import React from 'react';
import {  Link } from 'react-router-dom';
import { FiChevronLeft, FiFileText, FiCode} from 'react-icons/fi';


import logoImg from '../../assets/octocat.svg';
import {
  Header,
  HowItWorkInfo,
  Subtitle,
  Card
} from './styles';



const ApiUse: React.FC = () =>{
  return(
    <>
      <Header>
        <img src={logoImg} alt="Avatar Empresa"/>
          <Link to="/">
            <FiChevronLeft size={16}/>
              Voltar
          </Link>
      </Header>

      <HowItWorkInfo>
        <Subtitle>
          <FiFileText size={30}/>
          Manual de utilização da API de trabalhos do GitHub.
        </Subtitle>
        <h2>
          A API de trabalhos do GitHub permite que você pesquise e visualize trabalhos com JSON sobre HTTP.
        </h2>
      <Card>
        <a>
          <div>
            <strong>Para obter a representação JSON de qualquer resultado de pesquisa ou lista de empregos, anexe
              <code>.json </code>
              ao URL que você usaria no site HTML de empregos do GitHub.
            </strong>
            <div>
              <p>Antes de criar uma lista, você deve fazer login com sua conta do GitHub e verificar seu endereço de e-mail.</p>
              <p>Por exemplo, ao pesquisar empregos em ReactJs perto de Chicago no site, você deverá obter uma lista de resultados, como no exemplo abaixo: </p>
              <a href='https://jobs.github.com/positions?description=react&location=chicago'>
                <FiCode size={30}/>
                <code>https://jobs.github.com/positions?description=react&location=chicago</code>
              </a>
            </div>
            <div>
              <p>Para obter a representação JSON dessas tarefas, utilize <code><b>position.json</b></code> :</p>
              <a href='https://jobs.github.com/positions.json?description=python&location=remote'>
                <FiCode size={30}/>
                <code> https://jobs.github.com/positions.json?description=python&location=remote</code>
              </a>
            </div>
            <hr></hr>
            <br></br>
            <strong>Paginação</strong>
            <br></br>
            <div>
              <p>A API também oferece suporte à paginação <code>/positions.json</code>, por exemplo, retornará apenas 50 posições por vez. </p>
              <p>Você pode paginar os resultados adicionando um parâmetro de página às suas consultas.</p>
              <p>A paginação começa por padrão em <strong><code>0</code></strong>.</p>
              <br></br>
              <p>Exemplos de paginação:</p>
                <a href="https://jobs.github.com/positions.json?description=ruby&page=1">
                  <FiCode size={30}/>
                  <code>https://jobs.github.com/positions.json?description=ruby&page=1</code>
                </a>
                <a href="https://jobs.github.com/positions.json?page=1&search=code">
                 <FiCode size={30}/>
                 <code>https://jobs.github.com/positions.json?page=1&search=code</code>
                </a>
            </div>
            <hr></hr>
            <br></br>
            <strong>GET /positions.json</strong>
            <br></br>
            <div>
              <p>Parâmetros:</p>
              <p>Você pode paginar os resultados adicionando um parâmetro de página às suas consultas.</p>
              <br></br>
              <ul>
                <li>
                  <b>description </b>
                  - Um termo de pesquisa, como "ruby" ou "java". Este parâmetro tem um alias para pesquisar.
                  <a href="https://jobs.github.com/positions.json?description=java&full_time=true&location=sf">
                    <FiCode size={30}/>
                    <code>https://jobs.github.com/positions.json?description=java&full_time=true&location=sf</code>
                  </a>
                </li>
                <li>
                  <b>location </b>
                  - Um nome de cidade, código postal ou outro termo de pesquisa de local.
                  <a href="https://jobs.github.com/positions.json?location=sf">
                    <FiCode size={30}/>
                    <code>https://jobs.github.com/positions.json?description=java&full_time=true&location=sff</code>
                  </a>
                </li>
                <li>
                  <b>lat </b>
                  - Uma latitude específica. Ou usado, você também deve enviar muito tempo e não deve enviar localização.
                  <a href="https://jobs.github.com/positions.json?lat=37.3229978&long=-122.0321823">
                    <FiCode size={30}/>
                    <code>https://jobs.github.com/positions.json?lat=37.3229978&long=-122.0321823</code>
                  </a>
                </li>
                <li>
                  <b>long </b>
                  - Uma longitude específica. Se usado, você também deve enviar lat e não deve enviar localização.
                  <a href="https://jobs.github.com/positions.json?long=-122.0321823">
                    <FiCode size={30}/>
                    <code>https://jobs.github.com/positions.json?long=-122.0321823</code>
                  </a>
                 </li>
                <li>
                  <b>full_time </b>
                  - Se você quiser limitar os resultados a posições de tempo integral, defina este parâmetro como 'verdadeiro'.
                </li>

                  <a href="https://jobs.github.com/positions.json?page=1&full_time=true">
                    <FiCode size={30}/>
                    <code>https://jobs.github.com/positions.json?page=1&full_time=true</code>
                  </a>
              </ul>
            </div>
            <hr></hr>
            <br></br>
            <strong>GET /positions/ID.json</strong>
            <br></br>
            <div>
              <p>Recupere a representação JSON de um único anúncio de emprego.</p>
              <br></br>
              <p>Parâmetros</p>
              <br></br>
              <ul>
                <li>
                  <b>markdown </b>
                - Defina como 'true' para obter os campos de <code>description</code> e <code>how_to_apply</code> como <b>Markdown.</b>
                </li>
              </ul>
            </div>
          </div>
          </a>
      </Card>
    </HowItWorkInfo>
    </>
  )
}

export default ApiUse;
