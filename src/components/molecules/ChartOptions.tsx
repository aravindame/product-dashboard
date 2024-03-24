import React, { useMemo } from 'react';
import { BarChart, PieChart } from '../atoms';
import { Product } from '../../types/product';

/**
 * ChartOptions component dynamically renders either a BarChart or PieChart based on the provided props. It uses the
 * runReport flag, selected category, and selected products to determine the type of chart and data to display. The
 * component is optimized with useMemo to recalculate chart options only when necessary.
 *
 * @component
 * @param {ChartOptionsProps} props - The properties for configuring the chart.
 * @returns {JSX.Element} A BarChart or PieChart component based on the selected options.
 */

interface ChartOptionsProps {
  runReport: boolean;
  selectedCategory: string | null;
  selectedProducts: string[];
  products: Product[];
  categories?: string[];
}

const ChartOptions: React.FC<ChartOptionsProps> = ({
  runReport,
  selectedCategory,
  selectedProducts,
  products,
  categories,
}) => {
  const chartOptions = useMemo(() => {
    if (runReport && selectedCategory) {
      const categoryProducts = products.filter(product => product.category === selectedCategory);

      if (selectedProducts.length === 0 || selectedProducts.length > 4) {
        return {
          title: `All Products in ${selectedCategory}`,
          categories: categoryProducts.map(product => product.title),
          seriesData: categoryProducts.map(product => [product.title, product.price]),
          chartType: 'bar',
        };
      } else {
        const filteredProducts = products.filter(product => selectedProducts.includes(product.id.toString()));
        return {
          title: `Selected Products in ${selectedCategory}`,
          categories: filteredProducts.map(product => product.title),
          seriesData: filteredProducts.map(product => [product.title, product.price]),
          chartType: 'bar',
        };
      }
    } else {
      return {
        title: 'All Categories',
        seriesData: Array.isArray(categories) && categories.map(category => [category, 1]),
        chartType: 'pie',
      };
    }
  }, [runReport, selectedCategory, selectedProducts, products, categories]);

  // Depending on the chartType, render the appropriate chart component with the calculated options
  return chartOptions.chartType === 'bar' ? (
    <BarChart
      title={chartOptions.title}
      categories={chartOptions.categories || []}
      seriesData={chartOptions.seriesData || []}
      selectedCategory={selectedCategory || ''}
    />
  ) : (
    <PieChart title={chartOptions.title} seriesData={chartOptions.seriesData || []} />
  );
};

export default ChartOptions;
