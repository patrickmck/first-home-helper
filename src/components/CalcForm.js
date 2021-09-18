import React, { Component } from 'react';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import InputGroup from 'react-bootstrap/InputGroup';
// import DropdownButton from 'react-bootstrap/DropdownButton';


class CalcForm extends Component {

    constructor(props) {
        super(props);
        // console.log('CalcForm props: ')
        // console.log(this.props)
        this.handleInput = this.handleInput.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.state = {
            savings: props.savings,
            houseprice: props.houseprice,
            // loanvalue: props.loanvalue,
            res_state: props.res_state,
        };
        // console.log('CalcForm state: ')
        // console.log(this.state)
    }

    handleSubmit = e => {
        e.preventDefault()
        this.props.handleSubmit(this.state)
    }

    handleInput = (event) => this.setState({[event.target.id]: event.target.value})

    render() {
        return (
            <Form onSubmit={this.handleSubmit}>
                <Form.Group controlId='savings'>
                    <Form.Label>
                        Savings available for deposit:
                    </Form.Label>
                    <InputGroup>
                        <InputGroup.Text>$</InputGroup.Text>
                        <Form.Control type='number' defaultValue={this.state.savings} onChange={this.handleInput} />
                    </InputGroup>
                    <Form.Text className="text-muted">
                        <i>Helper text also available ...</i>
                    </Form.Text>
                </Form.Group>
                <br/>
                <Form.Group controlId='houseprice'>
                    <Form.Label>
                            Target price for the house:
                    </Form.Label>
                    <InputGroup>
                        <InputGroup.Text>$</InputGroup.Text>
                        <Form.Control type='number' defaultValue={this.state.houseprice} onChange={this.handleInput}/>
                    </InputGroup>
                </Form.Group>
                <br/>
                <Button variant="outline-primary" type="submit">
                    Calculate LVR
                </Button>
                <br/>
                <br/>
                <Form.Group controlId="res_state">
                    <Form.Label>
                            State:
                    </Form.Label>
                    <Form.Control as='select' defaultValue="Choose ..." onChange={this.handleInput}>
                        <option>Choose ...</option>
                        <option>NSW</option>
                        <option>QLD</option>
                        <option>VIC</option>
                    </Form.Control>
                </Form.Group>
                <br/>
                <Form.Group controlId="input3">
                    <Form.Check type="checkbox" label="First home buyer" />
                </Form.Group>
            </Form>
        );
    }
}

export default CalcForm;