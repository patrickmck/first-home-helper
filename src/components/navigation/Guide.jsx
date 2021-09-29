import React from 'react';
// import GuideRoutes from "./GuideRoutes";
import {Route, Switch, useRouteMatch} from "react-router-dom";
import { GuideContent, GuideSidebarItems } from "./GuideContent";
import GuideSidebar from "./GuideSidebar";
import NotFound from "../pages/NotFound";
import { Row, Col } from 'react-bootstrap';


function Guide(props) {
    let match = useRouteMatch()

    return (
        <Row>
            <Col xs={2}>
                <GuideSidebar/>
            </Col>
            <Col>
                <p>This is a floating header above the guide section.</p>
                <br/>
                <Switch>
                    {
                        GuideSidebarItems.map((item, index) => 
                            (<Route
                            exact path={`${match.path}/${item.route}`}
                            key={`${index}`}
                            render={(props) => <GuideContent path={item.route}/>}
                            />)
                        )
                    }
                    <Route render={NotFound}/>
                </Switch>
            </Col>
        </Row>
    );
}

export default Guide;