import React from 'react';
import { FormLabel } from '../FormLabel';
import { TextInput } from '../TextInput';
import { ErrorMessage } from '../ErrorMessage';

interface EmailFieldProps {
  placeholder?: string;
  isError?: boolean;
  required?: boolean;
  label: string;
  inlineLabel?: boolean;
  touched?: boolean | undefined;
  value: string | undefined;
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
  onBlur: (event: any) => void;
  errorMessage?: string;
}

export const EmailField: React.FC<EmailFieldProps> = ({
  label,
  required,
  inlineLabel,
  value,
  onChange,
  onBlur,
  touched,
  isError,
  errorMessage,
  placeholder,
}) => {
  return (
    <div>
      <FormLabel inline={inlineLabel} required={required} label={label} />
      <TextInput
        value={value}
        placeholder={placeholder || 'email'}
        onChange={onChange}
        onBlur={onBlur}
      />
      <ErrorMessage touched={touched} isError={isError} message={errorMessage} />
    </div>
  );
};
