import axios from 'axios';
import { Product } from '../types/product';

// Base URL for the API endpoints
const API_BASE_URL = import.meta.env.VITE_PUBLIC_BASE_URL || '';

// Fetch products by category
export const fetchProducts = async (category: string): Promise<Product[]> => {
  const { data } = await axios.get<{ products: Product[] }>(`${API_BASE_URL}/category/${category}`);
  return data.products;
};
