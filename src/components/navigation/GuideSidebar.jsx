import React from 'react';
import { Link, useRouteMatch } from 'react-router-dom';
import { GuideSidebarItems } from './GuideContent';


function GuideSidebar(props, {defaultActive}) {
    // const [activeIndex, ] = useState(defaultActive || 1);

    let match = useRouteMatch()

    return (
        <div><ul>
            {
                GuideSidebarItems.map( (item, index) => {
                    return(
                        <li key={index}><Link to={`${match.path}/${item.route}`}>
                            <p>{item.name}</p>
                        </Link></li>
                    )
                })
            }
        </ul></div>
    );
}

export default GuideSidebar;