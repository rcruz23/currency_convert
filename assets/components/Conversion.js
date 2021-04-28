import React from 'react';
import {Route, Switch, Link, BrowserRouter as Router} from 'react-router-dom';
import ConversionMoneda from "./ConversionMoneda";
import CurrencyHistory from "./CurrencyHistory";

const Conversion  = () => {

    return (
        <Router>
            <div>
                <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
                    <Link className={"navbar-brand"} to={"/conversion/moneda"}> Convertir </Link>
                    <div className="collapse navbar-collapse" id="navbarText">
                        <ul className="navbar-nav mr-auto">
                            <li className="nav-item">
                                {<Link className={"nav-link"} to={"/historial"}> Historial </Link>}
                            </li>
                        </ul>
                    </div>
                </nav>
                {<Switch>
                    <Route exact path="/conversion/moneda" component={ConversionMoneda} />
                    <Route path="/historial" component={CurrencyHistory} />
                </Switch>}
            </div>
        </Router>
    )
}

export default Conversion;