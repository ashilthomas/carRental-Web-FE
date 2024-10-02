import React from 'react';
import { FieldError } from 'react-hook-form';

interface SelectFieldProps {
  label: string;
  name: string;
  register: any;
  error?: FieldError;
  options: { label: string; value: string }[];
  className:string
}

const SelectField: React.FC<SelectFieldProps> = ({ label, name, register, error, options,className }) => {
  return (
    <div>
      <label>
        {label}:
        <select className={className} {...register(name)}>
          {options.map((option) => (
            <option key={option.value} value={option.value}>
              {option.label}
            </option>
          ))}
        </select>
      </label>
      {error && <p style={{ color: 'red' }}>{error.message}</p>}
    </div>
  );
};

export default SelectField;
