const DUMMY_DATA = [
    { id:'d1', region: 'Kenya', value:10},
    { id:'d2', region: 'Uganda', value:12},
    { id:'d3', region: 'Ethiopia', value:11},
    { id:'d4', region: 'Tanzania', value:6},
];

const MARGIN = { top: 20, bottom: 10};
const CHART_WIDTH = 600;
const CHART_HEIGHT = 400 - MARGIN.top - MARGIN.bottom;

const x = d3.scaleBand()
.rangeRound([0, CHART_WIDTH])
.padding(0.1);

const y = d3.scaleLinear()
.range([CHART_HEIGHT, 0]);

const chartContainer = d3.select('svg')
.attr('width', CHART_WIDTH)
.attr('height', CHART_HEIGHT); //container that holds my chart

x.domain(DUMMY_DATA.map((d) => d.region));
y.domain([0, d3.max(DUMMY_DATA, d => d.value) + 3])

const chart = chartContainer.append('g');

chart
.append('g')
.call(d3.axisBottom(x)
.tickSizeOuter(0))
.attr('transform', `translate(0, ${CHART_HEIGHT})`)
.attr('color', '#4f009e');

chart
.selectAll('.bar')
.data(DUMMY_DATA)
.enter()
.append('rect')
.classed('bar', true)
.attr('width', x.bandwidth())
.attr('height',data => CHART_HEIGHT - y(data.value))
.attr('x', data => x(data.region))
.attr('y', data => y(data.value)); 


chart
.selectAll('.label').data(DUMMY_DATA)
.enter()
.append('text')
.text(data => data.value)
.attr('x', data => x(data.region) + x.bandwidth() / 2)
.attr('y', data => y(data.value) - 20);

d3.select("body").append("svg")
    .attr("width", 1440)
    .attr("height", 30)
  .append("g")
    .attr("transform", "translate(0,30)")
    .call(axis);


const listItems = d3
.select('#data')
.select('ul')
.select('li')
.data(DUMMY_DATA)
.enter()
.append('li');

listItems('span').text(data => data.region);