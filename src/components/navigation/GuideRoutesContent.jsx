import React from 'react';
// import { withRouter, useParams } from 'react-router-dom';

class GuideRoutesContent extends React.Component {
    // constructor(props) {
    //     console.log('cons')
    //     console.log(props)
    //     super(props)
    // }

    // componentDidUpdate(prevProps) {
    //     console.log('update')
    //     // console.log(prevProps)
    //     console.log(this.props)
    // }

    render() {
        return <h2>{this.props.path}</h2>
    }
}

export default GuideRoutesContent;