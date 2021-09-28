import React from "react";
import {BrowserRouter, Route, Switch} from "react-router-dom";
import Page1 from "../pages/Page-1";
import Page2 from "../pages/Page-2";
import Page3 from "../pages/Page-3";
import HomePage from "../pages/HomePage";
import NotFound from "../pages/NotFoundPage";
import Guide from "./Guide.jsx";
import { Row, Col } from "react-bootstrap";

function Routes() {
    return (
        <BrowserRouter>
            <Row>
                <h4><a href='/'>First Home Helper</a></h4>
                <i>Australia's <u>only</u> comprehensive guide for first home buyers</i>
            </Row>
            <br/>
            <Row>
            <Switch>
                <Route path="/" exact component={HomePage}/>
                <Route path="/guide" component={Guide}/>
                <Route path="/lingo" component={Page2}/>
                <Route path="/calculator" component={Page3}/>
                <Route component={NotFound}/>
            </Switch>
            </Row>
        </BrowserRouter>
    )
}

export default Routes;