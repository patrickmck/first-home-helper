import React from "react";
import {BrowserRouter, Route, Switch} from "react-router-dom";
import HomePage from "../pages/HomePage";
import NotFound from "../pages/NotFound";
import Guide from "./Guide.jsx";
import Lingo from "./Lingo.jsx";
import { Row } from "react-bootstrap";

function Routes() {
    return (
        <BrowserRouter>
            <Row>
                <h4><a href='/'>First Home Helper</a></h4>
                <i>Australia's only comprehensive guide for first home buyers</i>
            </Row>
            <br/><hr/>
            <Row>
            <Switch>
                <Route path="/" exact component={HomePage}/>
                <Route path="/guide" component={Guide}/>
                <Route path="/lingo" component={Lingo}/>
                <Route path="/calculator" component={null}/>
                <Route component={NotFound}/>
            </Switch>
            </Row>
        </BrowserRouter>
    )
}

export default Routes;