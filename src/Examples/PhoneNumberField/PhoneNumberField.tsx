import React from 'react';
import { FormLabel } from '../FormLabel';
import { MaskedInput } from '../MaskedInput';
import { ErrorMessage } from '../ErrorMessage';

interface PhoneNumberFieldProps {
  mask: string;
  maskChar?: string;
  placeholder?: string;
  required?: boolean;
  isError?: boolean;
  disabled?: boolean;
  label?: string;
  touched?: boolean | undefined;
  inlineLabel?: boolean;
  value?: string | undefined;
  errorMessage?: string;
  onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;
  onBlur?: (event: any) => void;
}

export const PhoneNumberField: React.FC<PhoneNumberFieldProps> = ({
  label,
  mask,
  maskChar,
  required,
  inlineLabel,
  value,
  touched,
  isError,
  errorMessage,
  ...props
}) => {
  return (
    <div>
      <FormLabel inline={inlineLabel} required={required} label={label} />
      <MaskedInput mask={mask} maskChar={maskChar} type="tel" value={value} {...props} />
      <ErrorMessage touched={touched} isError={isError} message={errorMessage} />
    </div>
  );
};

export default PhoneNumberField;
