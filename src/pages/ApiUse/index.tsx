import React from 'react';
import { useRouteMatch, Link } from 'react-router-dom';
import { FiChevronLeft, FiMail} from 'react-icons/fi';


import logoImg from '../../assets/octocat.svg';
import HowToOne from '../../assets/howtoone.png'
import { Header, HowItWorkInfo, Subtitle, Card, } from './styles';



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
        A API de trabalhos do GitHub
      </Subtitle>
      <h2>
        A API de trabalhos do GitHub permite que você pesquise e visualize trabalhos com JSON sobre HTTP.
      </h2>
      <Card>
        <Link to={'/'}>
          <div>
            <strong>Para obter a representação JSON de qualquer resultado de pesquisa ou lista de empregos, anexe .json ao URL que você usaria no site HTML de empregos do GitHub.</strong>
            <br></br>
            <div>
              <p>Veja exatamente como sua listagem ficará antes de publicá-la ao vivo. Antes de criar uma lista, você deve fazer login com sua conta do GitHub e verificar seu endereço de e-mail.</p>
              <p>Por exemplo, ao pesquisar empregos em Python perto de Nova York no site, sou levado a este url:</p>
              <a>https://jobs.github.com/positions?description=python&location=new+york</a>
            </div>
            <div>
              <p>Para obter a representação JSON dessas tarefas, eu apenas uso position.json:</p>
              <a>https://jobs.github.com/positions.json?description=python&location=new+york</a>
            </div>
            <hr></hr>
            <br></br>
            <strong>Paginação</strong>
            <br></br>
            <div>
              <p>A API também oferece suporte à paginação <code>/positions.json</code>, por exemplo, retornará apenas 50 posições por vez. </p>
              <p>Você pode paginar os resultados adicionando um parâmetro de página às suas consultas.</p>
              <p>A paginação começa por padrão em <strong>0</strong>.</p>
              <br></br>
              <p>Exemplos:</p>
              <ul>
                <li><a href="">https://jobs.github.com/positions.json?description=ruby&page=1</a></li>
                <li><a href="">https://jobs.github.com/positions.json?page=1&search=code</a></li>
              </ul>
            </div>
            <hr></hr>
            <br></br>
            <strong>GET /positions.json</strong>
            <br></br>
            <div>
              <p>Parametros</p>
              <p>Você pode paginar os resultados adicionando um parâmetro de página às suas consultas.</p>
              <br></br>
              <ul>
                <li><b>description</b>- Um termo de pesquisa, como "ruby" ou "java". Este parâmetro tem um alias para pesquisar. </li>
                <li><b>location</b>- Um nome de cidade, código postal ou outro termo de pesquisa de local. </li>
                <li><b>lat</b>- Uma latitude específica. Ou usado, você também deve enviar muito tempo e não deve enviar localização.</li>
                <li><b>long</b>- Uma longitude específica. Se usado, você também deve enviar lat e não deve enviar localização </li>
                <li><b>full_time</b>- Se você quiser limitar os resultados a posições de tempo integral, defina este parâmetro como 'verdadeiro'. </li>

              </ul>

            </div>
          </div>
          </Link>
      </Card>
    </HowItWorkInfo>
    </>
  )
}

export default ApiUse;
