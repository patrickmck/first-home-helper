import React from 'react';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import CalcForm from './CalcForm';
import CalcResults from './CalcResults';

class Calculator extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            // Input expected from CalcForm
            savings: '',
            houseprice: '',
            loan_val: undefined,
            loan_lvr: undefined,
            // Calculated from CalcForm input
            res_state: '',
            // Provided to data generator
        }
    }

    handleSubmit = (input_data) => {
        let savings = parseInt(input_data.savings)
        let houseprice = parseInt(input_data.houseprice)
        let loanval = houseprice - savings
        let lvr = loanval / houseprice
        this.setState({
            savings: savings,
            houseprice: houseprice,
            loan_val: loanval,
            loan_lvr: lvr
        })

        // console.log('submit state: ')
        // console.log(this.state)
    }

    render() {
        let results_data = {
            val: this.state.loan_val,
            lvr: this.state.loan_lvr
        }
        
        return(
            <Row>
                <Col xs={4}>
                <CalcForm handleSubmit={this.handleSubmit}/>
                </Col>
                <Col>
                <CalcResults data={results_data} />
                </Col>
            </Row>
        );
    }
}

export default Calculator;