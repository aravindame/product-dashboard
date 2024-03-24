import axios from 'axios';
import { Category } from '../types/category';

// Base URL for the API endpoints
const API_BASE_URL = import.meta.env.VITE_PUBLIC_BASE_URL || '';

// Fetch all categories
export const fetchCategories = async (): Promise<Category[]> => {
  const { data } = await axios.get<Category[]>(`${API_BASE_URL}/categories`);
  return data;
};
