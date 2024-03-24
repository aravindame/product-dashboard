import React from 'react';
import HighchartsReact from 'highcharts-react-official';

import * as Highcharts from 'highcharts';
import exporting from 'highcharts/modules/exporting';

/**
 * The BarChart component renders a custom column chart using Highcharts library.
 *
 * @component
 * @param {BarChartProps} props - The properties required to render the BarChart.
 * @param {string} props.title - The title of the chart.
 * @param {string[]} props.categories - The categories along the x-axis.
 * @param {(string | number)[][]} props.seriesData - The data for the chart series, as an array of arrays containing the category and value.
 * @param {string} props.selectedCategory - The category currently selected, to be displayed on the yAxis.
 * @returns {JSX.Element} The rendered HighchartsReact component configured as a column chart.
 */

typeof window !== 'undefined' && exporting(Highcharts);

interface BarChartProps {
  title: string;
  categories: string[];
  seriesData: (string | number)[][];
  selectedCategory: string;
}

const BarChart: React.FC<BarChartProps> = ({ title, categories, seriesData, selectedCategory }) => {
  const options: Highcharts.Options = {
    chart: { type: 'column' },
    title: { text: title, x: -400, y: 10 },
    xAxis: { type: 'category', categories },
    yAxis: { title: { text: selectedCategory } },
    series: [
      {
        type: 'column',
        data: seriesData,
        showInLegend: false,
      },
    ],
    accessibility: {
      enabled: false,
    },
    exporting: {
      enabled: true,
      filename: 'my-chart',
    },
  };
  return <HighchartsReact highcharts={Highcharts} options={options} />;
};

export default BarChart;
