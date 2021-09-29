import React from "react";
import {Route, Switch, useRouteMatch} from "react-router-dom";
import NotFound from "../pages/NotFound";
import { GuideRoutesContent, GuideSidebarItems } from "./GuideRoutesContent";

const GuideRoutes = () => {
    let match = useRouteMatch()

    return (
        <Switch>
            {
                GuideSidebarItems.map((item, index) => 
                    (<Route
                    exact path={`${match.path}/${item.route}`}
                    key={`${index}`}
                    render={(props) => <GuideRoutesContent path={item.route}/>}
                    />)
                )
            }
            <Route render={NotFound}/>
        </Switch>
    )
}

export default GuideRoutes;