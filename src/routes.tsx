import React from 'react';

//importa a biblioteca de rotas
import { BrowserRouter, Switch, Route } from 'react-router-dom';

//importar as paginas/componentes do app
import Landing from './pages/Landing';
import OrphanagesMap from './pages/OrphanagesMap';

//gera rotas para cada pagina/componente
//"exact" faz a comparacao exata dos nomes da rotas
//<Switch> não permite que mais de uma rota seja exibida simultaneamente
function Routes() {
    return (
        <BrowserRouter basename={process.env.PUBLIC_URL}>
            <Switch>
                <Route path="/" exact component={Landing} />
                <Route path="/app" component={OrphanagesMap} />
            </Switch>
        </BrowserRouter>
    );
}

export default Routes;