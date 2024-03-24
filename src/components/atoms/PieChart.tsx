import React from 'react';
import HighchartsReact from 'highcharts-react-official';
import Highcharts from 'highcharts';

/**
 * The PieChart component renders a custom pie chart using Highcharts library.
 *
 * @component
 * @param {PieChartProps} props - The properties required to render the PieChart.
 * @param {string} props.title - The title of the chart, displayed at the top.
 * @param {(string | number)[][]} props.seriesData - The data for the chart series, where each array contains the category name and its corresponding value.
 * @returns {JSX.Element} The rendered HighchartsReact component configured as a pie chart.
 */

interface PieChartProps {
  title: string;
  seriesData: (string | number)[][];
}

const PieChart: React.FC<PieChartProps> = ({ title, seriesData }) => {
  const options: Highcharts.Options = {
    chart: { type: 'pie' },
    title: { text: title },
    series: [
      {
        type: 'pie',
        name: 'Categories',
        data: seriesData,
      },
    ],
    accessibility: {
      enabled: false,
    },
  };

  return <HighchartsReact highcharts={Highcharts} options={options} />;
};

export default PieChart;
