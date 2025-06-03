export interface DynamicField {
  type: string; // e.g., 'text', 'email', 'select'
  name: string; // form control name
  label: string;
  value?: any;
  options?: string[]; // for select or radio types
  validations?: any[];
}
