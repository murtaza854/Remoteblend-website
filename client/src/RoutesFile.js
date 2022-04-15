import React from 'react';
import {
    Switch,
    Route,
    useLocation,
} from "react-router-dom";
// import { MainNavbar, Footer, BlackBar } from './components';
import { WebNavbar } from './components';
import { Home } from './pages';

import {
    TransitionGroup,
    CSSTransition
} from "react-transition-group";
//   import './App.scss';
import './form.scss';
import './global.scss';

function RoutesFile(props) {

    let location = useLocation();

    return (
        <div>
            <WebNavbar />
            <TransitionGroup>
                <CSSTransition
                    key={location.key}
                    classNames="page"
                    timeout={300}
                >
                    <div className="page">
                        <Switch location={location}>
                            <Route path="/">
                                <Home />
                            </Route>
                        </Switch>
                    </div>
                </CSSTransition>
            </TransitionGroup>
        </div>
    );
}

export default RoutesFile;
