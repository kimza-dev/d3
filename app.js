const DUMMY_DATA = [
    { id:'d1', region: 'Kenya', value:10},
    { id:'d2', region: 'Uganda', value:12},
    { id:'d3', region: 'Ethiopia', value:11},
    { id:'d4', region: 'Tanzania', value:6},
];

const CHART_WIDTH = 600;
const CHART_HEIGHT = 400;

const chartContainer = d3.select('svg')
.attr('width', CHART_WIDTH)
.attr('height', CHART_HEIGHT); //container that holds my chart