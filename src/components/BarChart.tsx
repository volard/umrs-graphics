import React, { useRef, useEffect } from 'react';
import * as d3 from 'd3';

interface BarChartData {
  name: string;
  value: number;
}

const BarChart: React.FC<{ data: BarChartData[] }> = ({ data }) => {
  const svgRef = useRef<SVGSVGElement>(null);

  useEffect(() => {
    if (!svgRef.current || data.length === 0) return;

    const margin = { top: 20, right: 30, bottom: 30, left: 50 };
    const width = 1800 - margin.left - margin.right;
    const height = 400 - margin.top - margin.bottom;

    const svg = d3.select(svgRef.current)
      .attr("width", width + margin.left + margin.right)
      .attr("height", height + margin.top + margin.bottom)
      .append("g")
      .attr("transform", `translate(${margin.left},${margin.top})`);

    // X-axis scale
    const xScale = d3.scaleBand()
      .domain(data.map(d => d.name)) 
      .range([0, width])
      .padding(0.1); 

    svg.append("g")
      .attr("transform", `translate(0,${height})`)
      .call(d3.axisBottom(xScale));
    
    // Y-axis scale
    const yScale = d3.scaleLinear()
      // .domain([0, 100])
      .domain([0, d3.max(data, d => d.value)!]) 
      .range([height, 0]); 

    svg.append("g")
      .call(d3.axisLeft(yScale));

    // Draw bars
    svg.selectAll(".bar")
      .data(data)
      .enter()
      .append("rect")
      .attr("class", "bar")
      .attr("x", d => xScale(d.name)!) 
      .attr("y", d => yScale(d.value))
      .attr("width", xScale.bandwidth())
      .attr("height", d => height - yScale(d.value))
      .attr("fill", "steelblue");

  }, [data]); 

  return <svg ref={svgRef} />; 
};

export { type BarChartData, BarChart as default }; 
