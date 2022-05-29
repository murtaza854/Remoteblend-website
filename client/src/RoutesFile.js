import React from 'react';
import {
    Switch,
    Route,
    useLocation,
} from "react-router-dom";
// import { MainNavbar, Footer, BlackBar } from './components';
import { Footer, Sidebar, WebNavbar } from './components';
import { Home, BuildWithUs, Careers } from './pages';

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
                            <Route exact path="/careers">
                                <Careers />
                                <Footer />
                                <Sidebar />
                            </Route>
                            <Route path="/build-with-us">
                                <BuildWithUs />
                                <Footer />
                                <Sidebar />
                            </Route>
                            <Route path="/">
                                <Home />
                                <Footer />
                                <Sidebar />
                            </Route>
                        </Switch>
                    </div>
                </CSSTransition>
            </TransitionGroup>
        </div>
    );
}

export default RoutesFile;
