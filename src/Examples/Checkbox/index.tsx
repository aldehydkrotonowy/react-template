import React, { FC } from 'react';
import styled from 'styled-components';
import { Asterisk } from '../Asterisk';

export interface CheckboxProps {
  handleChange?: () => void;
  label?: string;
  checked: boolean;
  disabled?: boolean;
  required?: boolean;
}

export const Checkbox: FC<CheckboxProps> = ({
  handleChange,
  label,
  checked,
  disabled,
  required,
}) => {
  const id = `checkbox-${Math.floor((1 + Math.random()) * 0x10000)
    .toString(16)
    .substring(1)}`;

  return (
    <CheckboxContainer>
      <input
        type="checkbox"
        onChange={handleChange}
        id={id}
        defaultChecked={checked}
        disabled={disabled}
      />
      <label htmlFor={id}>
        {label && (
          <span>
            {label} {required && <Asterisk />}
          </span>
        )}
      </label>
    </CheckboxContainer>
  );
};

const CheckboxContainer = styled.div`
  width: 100%;
  position: relative;
  display: block;
  color: ${(p) => p.theme.colors.text};
  &:not(:last-child) {
    margin-bottom: 12px;
  }
  & label {
    display: flex;
    align-items: center;
    position: relative;
    min-height: 20px;
    font-weight: normal;
    cursor: pointer;
    & span {
      margin-left: 36px;
      & span {
        margin-left: 0px;
      }
    }
    &:before {
      content: '';
      position: absolute;
      left: 0;
      top: 0;
      width: 18px;
      height: 18px;
      transition: transform 0.28s ease;
      background-color: ${(p) => p.theme.colors.buttonHoverText};
      border-radius: 4px;
      border: 1px solid ${(p): string => p.theme.colors.inputBorderColor};
    }
    &:after {
      content: '';
      display: block;
      width: 7px;
      height: 4px;
      border-bottom: 3px solid ${(p) => p.theme.colors.buttonHoverText};
      border-left: 3px solid ${(p) => p.theme.colors.buttonHoverText};
      transform: rotate(-45deg) scale(0);
      transition: transform ease 0.25s;
      position: absolute;
      top: 5px;
      left: 5px;
    }
  }
  input[type='checkbox'] {
    width: auto;
    opacity: 0.00000001;
    position: absolute;
    left: 0;
    margin-left: -20px;
    &:checked ~ label {
      &:before {
        background-color: ${(p) => p.theme.colors.primaryButtonBackground};
        border: 1px solid ${(p) => p.theme.colors.primary};
      }
      &:after {
        transform: rotate(-45deg) scale(1);
      }
    }
    &:focus + label:before {
      outline: 0;
    }
  }
  input[type='checkbox']:disabled {
    &:checked ~ label {
      &:before {
        background: #625f5d;
        border: 1px solid #625f5d;
      }
      &:after {
        transform: rotate(-45deg) scale(1);
      }
    }
  }
`;
