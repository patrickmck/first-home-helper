import React from 'react';
import GuideRoutes from "./GuideRoutes";
import GuideSidebar from "./GuideSidebar";
import { Row, Col } from 'react-bootstrap';

function Guide(props) {
    return (
        <Row>
            <Col xs={2}><GuideSidebar/></Col>
            <Col>
                <p>This is a floating header above the guide section.</p>
                <br/>
                <GuideRoutes/>
            </Col>
        </Row>
    );
}

export default Guide;