import React from 'react';

//substitui a tag html <a href>
import { Link } from 'react-router-dom';

//importa arquivos css
import '../styles/global.css';
import '../styles/pages/landing.css';

//importar icones from react-icons
import { FiArrowRight } from 'react-icons/fi';

import logoImg from '../images/logo.svg';
//As chaves sempre sao usada para inserir uma variavel JS dentro do HTML{ }

//cria componentes para cada pagina do app
function Landing() {
    return (
        <div id="page-landing">
        <div className="content-wrapper">
            <img src={logoImg} alt="Happy"/>
            <main>
                <h1>Leve felicidade para o mundo</h1>
                <p>Visite orfanatos e mude o dia de muitas crianças.</p>
            </main>

            <div className="location">
                <strong>São Paulo</strong>
                <span>São Paulo</span>
            </div>

            <Link to="/app" className="enter-app">
                <FiArrowRight size={26} color="rgba(0, 0, 0, 0.6)" />
            </Link>
        </div>
    </div>
    );
}

export default Landing;