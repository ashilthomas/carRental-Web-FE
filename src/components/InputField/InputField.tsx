import React from 'react';
import { FieldError } from 'react-hook-form';

interface InputFieldProps {
  label: string;
  type: string;
  name: string;
  register: any;
  error?: FieldError;
  required?: boolean;
  className:string
}

const InputField: React.FC<InputFieldProps> = ({ label, type, name, register, error, required,className }) => {
    
  return (
    <div>
      <label>
        {label}:
        <input type={type} className={className} {...register(name, { required })} 
        />
      </label>
      {error && <p style={{ color: 'red' }}>{error.message}</p>}
    </div>
  );
};

export default InputField;
