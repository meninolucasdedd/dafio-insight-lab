import React from 'react';
import { useRouteMatch} from 'react-router-dom';
interface RepositoryParams {
  repository: string;

}

const Jobs: React.FC = () =>{
  const { params } = useRouteMatch<RepositoryParams>();

  return <h1>Jobs : {params.repository}</h1>
}

export default Jobs;
