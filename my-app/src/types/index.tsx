export interface FormProps {
  id?: string;
  name?: string;
  label?: string;
  type?: string;
  placeholder?: string;
  value?: string;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
  onBlur?: (e: React.FocusEvent<HTMLInputElement>) => void;
  error?: string;
  touched?: boolean;
  disabled?: boolean;
  checked?: boolean;
  className?: string;
}
export interface FormValues {
  firstname?: string;
  lastname?: string;
  email?: string;
  phone?: string;
  street?: string;
  city?: string;
  state?: string;
  zipCode?: string;
}
