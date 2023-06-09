import {
  UseFormRegister,
  UseFormRegisterReturn,
  UseFormUnregister,
} from 'react-hook-form';

export interface SignUpFormData {
  name: string;
  id: string;
  password: string;
  gender: string;
  phone1: string;
  phone2: string;
  ssn1: string;
  ssn2: string;
  address1: string;
  address2: string;
  email1: string;
  email2: string;
  privacyYn: 'Y' | 'N';
}

export interface InputProps {
  label?: string;
  placeholder?: string;
  type?: string;
  htmlFor?: string;
  maxLength?: number;
  width?: string;
  className?: string;
  register?: UseFormRegisterReturn;
  name?: string;
}
