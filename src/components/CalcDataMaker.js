import React from 'react';
import CalcLineChart from './CalcLineChart'

// credit Ivan: https://stackoverflow.com/questions/2706125/javascript-function-to-add-x-months-to-a-date
function addMonths(date, months) {
    let d = date.getDate();
    date.setMonth(date.getMonth() + +months);
    if (date.getDate() !== d) {
      date.setDate(0);
    }
    return date;
}

function CalcDataMaker(props) {
    console.log('props:')
    console.log(props)
    let loan_value = props.loan_value
    let loan_rate = props.loan_rate
    let loan_period = props.loan_period

    let total_value = loan_value * Math.pow(loan_rate, loan_period)
    let start_month = new Date('2021-09-01')
    let num_months = 12*loan_period
    let monthly_payment = total_value / num_months

    let payment_data = [...Array(num_months).keys()].map(i => {
        let step_date = addMonths(new Date(start_month), i)
        let step_paidtodate = monthly_payment * i
        return {
            index: i,
            date: step_date,
            paid: step_paidtodate
        }
    })

    // console.log(payment_data)

    return (
        <CalcLineChart data={payment_data} />
    )
}

export default CalcDataMaker;