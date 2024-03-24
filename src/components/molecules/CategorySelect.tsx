import { Category } from '../../types/category';
import { MenuItem, Select } from '@mui/material';

/**
 * The CategorySelect component renders a dropdown menu for selecting a category. It is built using Material-UI's
 * Select component and takes an array of categories as its data source. Each category is represented as an option
 * within the dropdown. The component is designed to allow users to select a category from the provided list,
 * enhancing user interaction and selection process in a form or filter.
 *
 * @component
 * @param {CategorySelectProps} props - The properties required to render the CategorySelect component.
 * @param {Category[]} props.categories - An array of categories to be displayed as options in the dropdown.
 * @param {string | null} props.selectedCategory - The currently selected category, if any.
 * @param {(category: string | null) => void} props.onSelectCategory - A callback function that is invoked when a category is selected, passing the selected category value.
 * @returns {JSX.Element} The rendered Select component with category options.
 */

interface CategorySelectProps {
  categories: Category[];
  selectedCategory: string | null;
  onSelectCategory: (category: string | null) => void;
}

const CategorySelect: React.FC<CategorySelectProps> = ({ categories = [], selectedCategory, onSelectCategory }) => (
  <Select
    value={selectedCategory || ''}
    onChange={e => onSelectCategory(e.target.value as string)}
    displayEmpty
    fullWidth
    sx={{ border: '1px solid #949494', borderRadius: '8px', marginTop: 4, height: 40 }}
  >
    <MenuItem value=''>
      <em>Select Category</em>
    </MenuItem>
    {Array.isArray(categories) &&
      categories.map(category => (
        <MenuItem key={category} value={category}>
          {category}
        </MenuItem>
      ))}
  </Select>
);

export default CategorySelect;
