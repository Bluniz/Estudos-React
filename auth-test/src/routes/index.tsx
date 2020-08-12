/*Rota para controle de rotas(Ex: Se o usuário estiver logado)
retornar rota do APP e se estiver deslogado retornar página de login*/
import React from 'react';
import AppRoutes from './app.routes';
import AuthRoutes from './auth.routes';
import { useAuth } from '../contexts/auth';

const Routes:React.FC = () => {
  const {signed, loading} = useAuth();
 
  //se loading for verdadeiro, retorna um loading!
  if(loading){
      return(
        <div>Loading...</div>
      )
  }

  //Se o usuario estivar autênticado, retorna a rota do APP
  //Se o o usuario não estiver autênticado, retorna a rota de login
  return signed ? <AppRoutes/> : <AuthRoutes/>
}


export default Routes;