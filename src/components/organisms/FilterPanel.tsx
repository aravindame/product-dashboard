import React from 'react';
import { Grid, Box, Typography } from '@mui/material';

import { Product } from '../../types/product';
import { Category } from '../../types/category';
import { CategorySelect, ProductSelect } from '../../components/molecules';
import { Button } from '../../components/atoms';

/**
 * FilterPanel component for selecting categories and products, and initiating filtering actions.
 *
 * @component
 * @param {FilterPanelProps} props - Component properties.
 * @returns {JSX.Element} Rendered component.
 */

interface FilterPanelProps {
  categories: Category[];
  selectedCategory: string | null;
  onSelectCategory: (category: string | null) => void;
  products: Product[];
  selectedProducts: string[];
  onSelectProducts: (products: string[]) => void;
  onClear: () => void;
  onRunReport: () => void;
  isDisabled: boolean;
  hasFiltersChanged: boolean;
}

const FilterPanel: React.FC<FilterPanelProps> = ({
  categories,
  selectedCategory,
  onSelectCategory,
  products,
  selectedProducts,
  onSelectProducts,
  onClear,
  onRunReport,
  isDisabled,
  hasFiltersChanged,
}) => (
  <Grid item xs={12} md={2} sx={{ display: 'flex', flexDirection: 'column' }}>
    <Box sx={{ flexGrow: 1, border: '2px solid #949494', borderRadius: '4px', p: 2, mb: 2 }}>
      <Box display='flex' justifyContent='space-between' alignItems='center'>
        <Typography variant='h6'>Filters</Typography>
        <Button
          onClick={onClear}
          text='Clear'
          styleProps={{
            color: '#4B4B4B',
            textTransform: 'none',
            '&:hover': {
              bgcolor: 'transparent',
              color: 'black',
            },
          }}
        />
      </Box>
      <CategorySelect categories={categories} selectedCategory={selectedCategory} onSelectCategory={onSelectCategory} />
      <ProductSelect
        products={products}
        selectedProducts={selectedProducts}
        onSelectProducts={onSelectProducts}
        isDisabled={isDisabled}
      />
      <Button
        onClick={onRunReport}
        text='Run Report'
        variant='contained'
        color='primary'
        fullWidth
        disabled={!hasFiltersChanged}
        styleProps={{ mt: '50vh', textTransform: 'none' }}
      />
    </Box>
  </Grid>
);

export default FilterPanel;
