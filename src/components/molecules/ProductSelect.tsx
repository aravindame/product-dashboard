import { Product } from '../../types/product';
import { MenuItem, Select } from '@mui/material';

/**
 * ProductSelect component renders a multi-select dropdown allowing the selection of multiple products. It displays
 * selected products as a comma-separated list. The component is optimized for performance by preventing unnecessary
 * re-renders using React.memo.
 *
 * @component
 * @param {ProductSelectProps} props - Properties including the product list, selected products, a callback for when
 * selections change, and a flag to disable the select.
 * @returns {JSX.Element} A multi-select dropdown for product selection.
 */

interface ProductSelectProps {
  products: Product[];
  selectedProducts: string[];
  onSelectProducts: (products: string[]) => void;
  isDisabled: boolean;
}

const ProductSelect: React.FC<ProductSelectProps> = ({ products, selectedProducts, onSelectProducts, isDisabled }) => (
  <Select
    multiple
    value={selectedProducts}
    onChange={e => onSelectProducts(e.target.value as string[])}
    disabled={isDisabled}
    sx={{ border: '1px solid #949494', borderRadius: '5px', marginTop: 4, height: 40 }}
    renderValue={selected =>
      selected.map(value => products.find(product => product.id.toString() === value)?.title || '').join(', ')
    }
    fullWidth
  >
    <MenuItem value='' disabled>
      <em>Select Product</em>
    </MenuItem>
    {products.map(product => (
      <MenuItem key={product.id} value={product.id.toString()}>
        {product.title}
      </MenuItem>
    ))}
  </Select>
);

export default ProductSelect;
