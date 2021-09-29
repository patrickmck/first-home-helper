import React from 'react';
import * as d3 from 'd3';


class CalcLineChart extends React.Component {
    constructor(props) {
        super(props)

        let margin = {top: 10, right: 30, bottom: 30, left: 60}
        
        this.chart_width = 700
        this.chart_height = 500

        this.inputs = {
            data: props.data,
            /* Sizing */
            margin: margin,
            fig_width: this.chart_width - margin.left - margin.right,
            fig_height: this.chart_height - margin.top - margin.bottom,
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
            .attr('width', inputs.fig_width + inputs.margin.left + 2*inputs.margin.right)
            .attr('height', inputs.fig_height + inputs.margin.top + inputs.margin.bottom)
            .append("g")
            .attr("transform", `translate(${inputs.margin.left},${inputs.margin.top})`)
        
        // eslint-disable-next-line
        let data = inputs.data

        let xAxis = d3.scaleLinear()
            .range([0, inputs.fig_width]);

        let yAxis = d3.scaleLinear()
            .range([0,inputs.fig_height]);
        
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

        // remove previously drawn lines (rather than properly binding the data)
        fig.selectAll('.paytypes')
            .remove()
        fig.selectAll('.leglines')
            .remove()

        let xAxis = inputs.xaxis
        // let make_xaxis = inputs.make_xaxis
        xAxis.domain([1, d3.max(data, (d) => d.index)])
        let make_xaxis = d3.axisBottom().scale(xAxis)
        fig.selectAll('.fig_xaxis').transition().duration(300).call(make_xaxis)

        let yAxis = inputs.yaxis
        // let make_yaxis = inputs.make_yaxis
        yAxis.domain([0, 1.05*d3.max(data, (d) => d.paid)])
        let make_yaxis = d3.axisLeft().scale(yAxis)
        fig.selectAll('.fig_yaxis').transition().duration(300).call(make_yaxis)


        /** 
         * Single line chart
         * 
         */
        // let make_line = d3.line()
        //     .x((d) => xAxis(d.index))
        //     .y((d) => yAxis(d.paid));

        // let path = fig.selectAll('.fig_line')
        //     .data([data], (d) => d.index);

        // path.enter()
        //     .append('path')
        //     .attr('class', 'fig_line')
        //     .merge(path)
        //     .transition()
        //     .duration(300)
        //     .attr('d', make_line)
        //     .attr('fill', 'none')
        //     .attr('stroke', 'purple')
        //     .attr('stroke-width', 2.5);


        let bypaydata = [
            {
                type: 'principle',
                values: data.map((d) => {
                    return {
                        date: d.index,
                        paid: d.principle
                    }
                })
            },
            {
                type: 'interest',
                values: data.map((d) => {
                    return {
                        date: d.index,
                        paid: d.principle + d.interest
                    }
                })
            }
        ]

        // Multi line colour constructor
        let bypaycolour = d3.scaleOrdinal(d3.schemePaired).domain(['interest','principle'])

        // Multi line DOM drawer
        let bypayline = d3.line()
            .x((d) => xAxis(d.date))
            .y((d) => yAxis(d.paid));

        // Select lines by legend key, then enter into drawing their values
        let paytype = fig.selectAll(".paytypes")
            .data(bypaydata)
            .enter().append("g")
            .attr("class", "paytypes");

        paytype.append("path")
            .attr("class", "line")
            // .merge(paytype)
            // .transition()
            // .duration(300)
            .attr("d", (d) => bypayline(d.values))
            .attr("stroke", (d) => bypaycolour(d.type))
            .attr('stroke-width', 2.5);


        // Create legend lines, positioned at respective max y values
        let y_max = (d) => d3.max(d.values.map((v) => v.paid))
        // console.log(bypaydata[0].type)
        // console.log(y_max(bypaydata[0]).toLocaleString('en-US'))
        // console.log(bypaydata[1].type)
        // console.log(y_max(bypaydata[1]).toLocaleString('en-US'))

        let leglines = fig.selectAll(".leglines")
            .data(bypaydata)
            .enter().append("g")
            .attr("class", "leglines");

        leglines.append('line')
            .attr('x1', xAxis.range()[0])
            .attr('x2', xAxis.range()[1])
            .attr('y1', (d) => yAxis(y_max(d)))
            .attr('y2', (d) => yAxis(y_max(d)))
            .attr("stroke", (d) => bypaycolour(d.type))
            .attr('stroke-width', 1.5)
            .attr('stroke-dasharray', '10,20');

        leglines.append('text')
            .attr('x', 20)
            .attr('y', (d) => yAxis(y_max(d))+15)
            .attr('font-style', 'italic')
            .attr('fill', (d) => bypaycolour(d.type))
            .text((d) => d.type);

    }

    render() {
        return(
            <svg ref={node => this.node = node}
            width={this.chart_width} height={this.chart_height}>
            </svg>
        )
    }
}


export default CalcLineChart;
