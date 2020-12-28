/* eslint-disable @typescript-eslint/indent */
import React from 'react';
import { MaskedInput } from './../MaskedInput';

type HourFieldProps = {
  disabled?: boolean;
  maskChar?: string;
  error?: boolean;
  name?: string;
  required?: boolean;
  type?: string;
  className?: string;
  value?: string;
  onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;
  onBlur?: (event: any) => void;
};

const preserveHourFormat = (event: any) => {
    const previousFieldValue = event.target.value;
    const {keyCode} = event;
    
    const BACKSPACE_KEY = 8;
    const ZERO_KEY = 48;
    const TWO_KEY = 50;
    const THREE_KEY = 51;
    const FIVE_KEY = 53;

    if (keyCode === BACKSPACE_KEY) return;
    if (previousFieldValue.startsWith('_') && (keyCode < ZERO_KEY || keyCode > TWO_KEY)) {
        event.preventDefault();
        return;
    }
    if (previousFieldValue.startsWith('2_') && (keyCode < ZERO_KEY || keyCode > THREE_KEY)) {
        event.preventDefault();
        return;
    }
    if (previousFieldValue[1] !== '_' && previousFieldValue[3] === '_' && (keyCode < ZERO_KEY || keyCode > FIVE_KEY)) {
        event.preventDefault();
        return;
    }
}


export const HourField: React.FC<HourFieldProps> = ({
  type,
  className,
  error,
  ...props
}) => {
  return (
    <MaskedInput
      className={className}
      type={type}
      onChange={props.onChange}
      onKeyDown={preserveHourFormat}
      placeholder="__:__"
      mask='99:99'
      {...props}
    />
  );
};


