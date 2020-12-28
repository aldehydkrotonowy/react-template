/* eslint-disable @typescript-eslint/indent */
import React from 'react';
import ReactInputMask from 'react-input-mask';
import styled from 'styled-components';

type MaskedInputProps = {
  disabled?: boolean;
  maskChar?: string;
  error?: boolean;
  mask: string;
  name?: string;
  placeholder?: string;
  required?: boolean;
  type?: string;
  className?: string;
  value?: string;
  onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;
  onBlur?: (event: any) => void;
  onKeyDown?: (event: any) => void;
};

export const MaskedInputComponent: React.FC<MaskedInputProps> = ({
  type,
  className,
  error,
  ...props
}) => {
  // exchange `number` type for `tel` because format logic isn't compatible with masking
  // https://github.com/sanniassin/react-input-mask/issues/110
  return (
    <ReactInputMask
      className={className}
      id={props.name}
      type={type === 'number' ? 'tel' : type}
      {...props}
    />
  );
};

export const MaskedInput = styled(MaskedInputComponent)<MaskedInputProps>`
  padding: ${(p): string => `${p.theme.spacings.small}px ${p.theme.spacings.large}px`};
  border: ${(p): string => `1px solid ${p.theme.colors.inputBorderColor}`} !important;
  border-radius: 3px;
  width: 100%;
  font-size: ${(p): string => p.theme.fontSize};
  ${(p): string | false | undefined =>
    p.disabled && `background-color: ${p.theme.colors.grayDisabled}`};
  &:focus {
    border: ${(p): string => {
      return `1px solid ${p.theme.colors.primary}`;
    }};
    box-shadow: none;
  }
  background-color: ${(p) => p.theme.colors.inputBackgroundColor};
  color: ${(p) => p.theme.colors.text};
`;
