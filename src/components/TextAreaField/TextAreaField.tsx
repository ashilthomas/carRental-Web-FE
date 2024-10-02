import React from 'react';
import { FieldError } from 'react-hook-form';

interface TextAreaFieldProps {
  label: string;
  name: string;
  register: any;
  error?: FieldError;
  required?: boolean;
  className?: string
}

const TextAreaField: React.FC<TextAreaFieldProps> = ({ label, name, register, error, required,className }) => {
  return (
    <div>
      <label>
        {label}:
        <textarea className={className} {...register(name, { required })} />
      </label>
      {error && <p style={{ color: 'red' }}>{error.message}</p>}
    </div>
  );
};

export default TextAreaField;
