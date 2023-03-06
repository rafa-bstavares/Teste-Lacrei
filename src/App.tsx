import { useState } from 'react'
import { createGlobalStyle, GlobalStyleComponent } from 'styled-components'
import * as C from "./AppStyles"

import {createBrowserRouter, RouterProvider, Outlet} from "react-router-dom"
import { ContainerGeral } from './components/ContainerGeral'
import { Header } from './components/Header'
import { Footer } from './components/Footer'



function App() {

  const GlobalStyle = createGlobalStyle`
  *{
    margin: 0;
    padding: 0;
    font-family: 'Nunito', sans-serif;
    }

    html{
      font-size: 62.5%
    }
  
`


  return (
    <>
      <GlobalStyle/>
      <ContainerGeral>
        <Header/>
        <Outlet/>
        <Footer/>
      </ContainerGeral>
    </>
  )
}

export default App


/*
Próximos passos:
--Criar um componente para cada rota do site (home, pessoa usuária, profissional)


*/

/*
Ali embaixo do GlobalStyle vai entrar o BrowserRouter, mas antes disso, vai colocando o componente que ta desenvolvendo naquele momento pra ir vendo como tá na tela


*/


/*
FALTA: 

--Colocar qual opção do menu está na tela em destaque (no alto em verde, embaixo em negrito)

--Fazer isso no componente botao: (envolver o texto com tag link para fazer o router)
<C.Botao style={{color: botaoCorTexto, backgroundColor: botaoCorFundo}}><Link>{botaoTexto}</Link></C.Botao>
*/


/*
HOME:
<Home tituloTexto="Boas vindas a Lacrei Saúde" width="45.3rem"/>




PESSOA USUARIA: 
<PessoaUsuaria tituloTexto='Pessoa Usuária' width='auto'></PessoaUsuaria>
*/