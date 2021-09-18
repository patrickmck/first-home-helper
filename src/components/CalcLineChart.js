import React from 'react';
import * as d3 from 'd3';


class CalcLineChart extends React.Component {
    constructor(props) {
        super(props)

        let margin = {top: 10, right: 30, bottom: 30, left: 60}

        this.inputs = {
            data: props.data,
            /* Sizing */
            margin: margin,
            fig_width: 800 - margin.left - margin.right,
            fig_height: 500 - margin.top - margin.bottom,
            /*  */
        }
    }

    componentDidMount() {
        this.createLineChart(this.node, this.inputs)
    }
    componentDidUpdate() {
        // change current state to new
        this.inputs.data = this.props.data
        this.updateLineChart(this.node, this.inputs)
    }

    createLineChart = (node, inputs) => {
        // console.log(inputs.fig_height)
        let fig = d3.select(node)
            .append('svg')
            .attr('width', inputs.fig_width + inputs.margin.left + inputs.margin.right)
            .attr('height', inputs.fig_height + inputs.margin.top + inputs.margin.bottom)
            .append("g")
            .attr("transform", `translate(${inputs.margin.left},${inputs.margin.top})`)
        
        let data = inputs.data

        let xAxis = d3.scaleLinear()
            .range([0, inputs.fig_width]);

        let yAxis = d3.scaleLinear()
            .range([inputs.fig_height, 0]);
        
        inputs.xaxis = xAxis
        inputs.yaxis = yAxis
        // inputs.make_xaxis = d3.axisBottom().scale(this.xAxis)
        // inputs.make_yaxis = d3.axisLeft().scale(this.yAxis)

        fig.append('g')
            .attr('class', 'fig_xaxis')
            .attr('transform', `translate(0,${inputs.fig_height})`)
        
        
        fig.append('g')
            .attr('class', 'fig_yaxis');

        inputs.fig_select = fig
        
        this.updateLineChart(node, inputs)
    }

    updateLineChart = (node, inputs) => {
        let data = inputs.data
        // console.log(data)
        let fig = inputs.fig_select

        let xAxis = inputs.xaxis
        // let make_xaxis = inputs.make_xaxis
        xAxis.domain([0, d3.max(data, (d) => d.index)])
        let make_xaxis = d3.axisBottom().scale(xAxis)
        fig.selectAll('.fig_xaxis').transition().duration(300).call(make_xaxis)

        let yAxis = inputs.yaxis
        // let make_yaxis = inputs.make_yaxis
        yAxis.domain([0, d3.max(data, (d) => d.paid)])
        let make_yaxis = d3.axisLeft().scale(yAxis)
        fig.selectAll('.fig_yaxis').transition().duration(300).call(make_yaxis)

        let make_line = d3.line()
            .x((d) => xAxis(d.index))
            .y((d) => yAxis(d.paid));

        let path = fig.selectAll('.fig_line')
            .data([data], (d) => d.index);

        path.enter()
            .append('path')
            .attr('class', 'fig_line')
            .merge(path)
            .transition()
            .duration(300)
            .attr('d', make_line)
            .attr('fill', 'none')
            .attr('stroke', 'purple')
            .attr('stroke-width', 2.5);

    }

    render() {
        return(
            <svg ref={node => this.node = node}
            width={'100%'} height={500}>
            </svg>
        )
    }
}


export default CalcLineChart;
