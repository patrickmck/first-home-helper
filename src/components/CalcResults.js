import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import CalcDataMaker from './CalcDataMaker';

class CalcResults extends React.Component {
    constructor(props) {
        super(props)
        this.state = props.data
    }

    componentDidUpdate = (prevProps, prevState) => {
        if (prevProps !== this.props) {
            // console.log('props updated')
            this.setState(this.props.data)
        }
    }

    render() {
        // console.log('results render:')
        // console.log(this.state)
        let deposit = this.state.dep
        let loan_val = this.state.val
        let loan_lvr = (this.state.lvr === undefined) ? undefined : 100 * this.state.lvr

        let no_data_row = <Row>No data yet</Row>
        let loan_info_row = <Row>Loan value</Row>
        let lvr_info_row = <Row>LVR (Loan-Value ratio)</Row>

        let loan_val_row = (loan_val === undefined) ?
            no_data_row :
            <Row>${loan_val.toLocaleString('en-AU')}</Row>;
        

        let loan_lvr_row = (loan_lvr === undefined) ?
            no_data_row :
            <Row>{0.1*Math.round(10*loan_lvr)}%</Row>
        
        let results_data = (loan_val === undefined) ?
            '' :
            <CalcDataMaker
                deposit={deposit}
                loan_value={loan_val}
                loan_rate={1.035}
                loan_period={30}
            />

        return(
            <Container>
                <Row>
                    <Col xs={1}/>
                    <Col>
                        {loan_info_row}
                        {loan_val_row}
                    </Col>
                    <Col>
                        {lvr_info_row}
                        {loan_lvr_row}
                    </Col>
                </Row>
                <br/>
                {results_data}
            </Container>
        );
    }
}

export default CalcResults;