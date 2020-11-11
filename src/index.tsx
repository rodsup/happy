//biblioteca do react
import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';

//JSX - JavaScript XML

//cria um estrutura para a propriedades no componente Title
interface TitleProps {
    text: string;
}

//propriedades - sao parametros passados para os componentes
/*
function Title(props: TitleProps) {
    return (
    <h1>{props.text}</h1>
    )   
}
//como chamar os componentes
    <Title text="Titulo 1"/>
    <Title text="Titulo 2"/>
    <Title text="Titulo 3"/>
*/

//<App/> eh um componente - uma funcao que retorna conteudo JSX
//metodo render - renderiza um elemento JSX na root do html
ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);