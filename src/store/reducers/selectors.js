import { EMPLOYEES, TEMPLATES, GENERATE_CV } from 'Actions/action-types';
import { selectedOptionsReducer, selectedItemsReducer } from './selected-options';

export const getEmployee = store => selectedOptionsReducer.getEmployee(store[EMPLOYEES]);
export const getTemplate = store => selectedOptionsReducer.getTemplate(store[TEMPLATES]);
export const getSelectedValues = store =>
  selectedItemsReducer.getSelectedValues(store[GENERATE_CV]);
