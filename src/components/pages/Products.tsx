import { useCallback, useState } from 'react';
import { useQuery } from '@tanstack/react-query';
import { Container, Grid, Box } from '@mui/material';

import { Product } from '../../types/product';
import { Category } from '../../types/category';
import { arraysEqual } from '../../util';
import { fetchCategories } from '../../services/categories';
import { fetchProducts } from '../../services/products';
import { ChartDisplay, FilterPanel } from './../organisms';

/**
 * Products page component responsible for displaying and managing product categories,
 * selected products, and rendering the filter panel and chart display based on user selection.
 *
 * @component
 * @returns {JSX.Element} Rendered component for the products page including filter panel and chart display.
 */

const Products: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);
  const [selectedProducts, setSelectedProducts] = useState<string[]>([]);
  const [prevSelectedCategory, setPrevSelectedCategory] = useState<string | null>(null);
  const [prevSelectedProducts, setPrevSelectedProducts] = useState<string[]>([]);
  const [runReport, setRunReport] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const hasFiltersChanged =
    selectedCategory !== prevSelectedCategory || !arraysEqual(selectedProducts, prevSelectedProducts);

  const { data: categories, error: categoriesError } = useQuery<Category[], Error>({
    queryKey: ['categories'],
    queryFn: fetchCategories,
  });

  const { data: products, error: productsError } = useQuery<Product[], Error>({
    queryKey: ['products', selectedCategory],
    queryFn: () => fetchProducts(selectedCategory!),
    enabled: !!selectedCategory, // The query will only run when selectedCategory is not null/undefined
    initialData: [], // Provide an initial empty array as fallback data
  });

  const handleCategoryChange = useCallback((category: string | null) => {
    setSelectedCategory(category);
    setRunReport(false); // Reset runReport when category changes
  }, []);

  const handleProductChange = useCallback((products: string[]) => {
    setSelectedProducts(products);
    setRunReport(false); // Reset runReport when product selection changes
  }, []);

  const handleClear = useCallback(() => {
    setSelectedCategory(null);
    setSelectedProducts([]);
    setRunReport(false);
    // Reset previous states
    setPrevSelectedCategory(null);
    setPrevSelectedProducts([]);
  }, []);

  const handleRunReport = useCallback(() => {
    if (selectedCategory) {
      setIsLoading(true);
      setTimeout(() => {
        setIsLoading(false);
        setRunReport(true);
        // Save the current filter states as previous
        setPrevSelectedCategory(selectedCategory);
        setPrevSelectedProducts([...selectedProducts]);
      }, 3000);
    }
  }, [selectedCategory, selectedProducts]);

  if (categoriesError || productsError) {
    throw new Error('An error occurred while fetching data!');
  }

  return (
    <Box sx={{ padding: '20px', height: '100vh', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
      <Container maxWidth='xl' sx={{ maxWidth: `calc(100% - 40px)` }}>
        <Grid container spacing={2}>
          <Grid container spacing={2} sx={{ height: 'auto', maxWidth: 1600 }}>
            <FilterPanel
              categories={categories || []} // Assuming categories is an array
              selectedCategory={selectedCategory}
              onSelectCategory={handleCategoryChange}
              products={products || []} // Assuming products is an array
              selectedProducts={selectedProducts}
              onSelectProducts={handleProductChange}
              onClear={handleClear}
              onRunReport={handleRunReport}
              isDisabled={!selectedCategory}
              hasFiltersChanged={hasFiltersChanged}
            />
            <ChartDisplay
              isLoading={isLoading}
              runReport={runReport}
              selectedCategory={selectedCategory}
              selectedProducts={selectedProducts}
              products={products}
              categories={categories}
            />
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};

export default Products;
