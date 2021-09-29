import React from 'react';
import NotFound from '../pages/NotFound';


/**
 * GuideSidebarItems holds information about all pages/routes, which gets used by
 * the GuideSideBar and GuideRoutes components to effect the app routing.
 * 
 * It also contains pointers to functions, defined further down in this scope, that
 * render the actual contents of those pages.
 */
export const GuideSidebarItems = [
    {
        name: "Home",
        route: '',
        content: step_0_guide_home,
    },
    {
        name: "Page 1",
        route: 'page-1',
        content: step_1_getting_started
    },
    {
        name: "Page 2",
        route: 'page-2',
        content: step_2_saving_deposit
    },
    {
        name: "Page 3",
        route: 'page-3',
        content: 'lalala'
    },
];

/**
 * GuideRoutesContent is a component which expects to be provided with a `path` prop
 * which it can then match up to the appropriate content-generating function via the
 * `guide_contents` object created in the constructor.
 * 
 * If `path` or its content-generating function is not found, returns the 404 page.
 */
export class GuideRoutesContent extends React.Component {
    constructor(props) {
        super(props)
        this.guide_contents = {}
        GuideSidebarItems.map(
            (item) => {
                this.guide_contents[item.route] = item.content
                return null;
            }
        )
    }

    render() {
        let page_path = this.props.path

        let page_contents = this.guide_contents[page_path]
        page_contents = (page_contents === undefined || typeof page_contents != 'function') ? NotFound : page_contents

        return page_contents()
    }
}


/**
 * Below fall the content-generating functions for the pages.
 */

function step_0_guide_home() {
    return (
        <div>
            <h1>Guide start page</h1>
        </div>
    )
}

function step_1_getting_started () {
    return(
        <div>
            <h1>HTML Ipsum Presents</h1>

            <p><strong>Pellentesque habitant morbi tristique</strong> senectus et netus et malesuada fames ac turpis egestas. Vestibulum tortor quam, feugiat vitae, ultricies eget, tempor sit amet, ante. Donec eu libero sit amet quam egestas semper. <em>Aenean ultricies mi vitae est.</em> Mauris placerat eleifend leo. Quisque sit amet est et sapien ullamcorper pharetra. Vestibulum erat wisi, condimentum sed, <code>commodo vitae</code>, ornare sit amet, wisi. Aenean fermentum, elit eget tincidunt condimentum, eros ipsum rutrum orci, sagittis tempus lacus enim ac dui. <a href="/">Donec non enim</a> in turpis pulvinar facilisis. Ut felis.</p>

            <h2>Header Level 2</h2>

            <ol>
            <li>Lorem ipsum dolor sit amet, consectetuer adipiscing elit.</li>
            <li>Aliquam tincidunt mauris eu risus.</li>
            </ol>

            <blockquote><p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus magna. Cras in mi at felis aliquet congue. Ut a est eget ligula molestie gravida. Curabitur massa. Donec eleifend, libero at sagittis mollis, tellus est malesuada tellus, at luctus turpis elit sit amet quam. Vivamus pretium ornare est.</p></blockquote>

            <h3>Header Level 3</h3>

            <ul>
            <li>Lorem ipsum dolor sit amet, consectetuer adipiscing elit.</li>
            <li>Aliquam tincidunt mauris eu risus.</li>
            </ul>
        </div>
    )
}

function step_2_saving_deposit() {
    return(
        <div>
            <h1>You gotta have money!</h1>
            <br/>
            <em>( ... in case you didn't know already ...)</em>
        </div>
    )
}