import { createContext } from 'react';
import initialState from '../initialState';

// Context Initialization to Pass Reducer Data
const DataContext = createContext(initialState);
export default DataContext;
