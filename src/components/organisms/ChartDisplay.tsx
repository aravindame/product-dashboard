import React from 'react';
import { Grid, CircularProgress } from '@mui/material';

import { Product } from '../../types/product';
import { Category } from '../../types/category';
import { ChartOptions } from '../../components/molecules';

/**
 * ChartDisplay component conditionally renders either a loading indicator or a chart based on the `isLoading` flag.
 * When not loading, it displays a chart with options determined by the selected category, selected products, and
 * available products and categories. This component is optimized for performance by using React.memo to prevent
 * unnecessary re-renders.
 *
 * @component
 * @param {ChartDisplayProps} props - Properties including loading state, report generation flag, selected category,
 * selected products, list of products, and optional list of categories.
 * @returns {JSX.Element} A grid item containing either a loading indicator or a chart.
 */

interface ChartDisplayProps {
  isLoading: boolean;
  runReport: boolean;
  selectedCategory: string | null;
  selectedProducts: string[];
  products: Product[];
  categories?: Category[];
}

const ChartDisplay: React.FC<ChartDisplayProps> = ({
  isLoading,
  runReport,
  selectedCategory,
  selectedProducts,
  products,
  categories,
}) => {
  return (
    <Grid item md={9} mt={16}>
      {isLoading ? (
        <CircularProgress size={40} sx={{ marginLeft: '55%', marginTop: '15%' }} />
      ) : (
        <ChartOptions
          runReport={runReport}
          selectedCategory={selectedCategory}
          selectedProducts={selectedProducts}
          products={products}
          categories={categories}
        />
      )}
    </Grid>
  );
};

export default React.memo(ChartDisplay);
