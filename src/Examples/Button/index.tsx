import React, { ReactNode } from 'react';
import styled, { css, DefaultTheme, ThemeProps, StyledComponent } from 'styled-components';
import { BorderStyle, ButtonType, Color, Size } from './types';
import { buttonColorStyle, buttonSizeStyle } from './styles';
import { LeftIcon, RightIcon } from './ButtonIcon';
import { NumberValues, fontRegular } from '../../styles';
import { CircleLoader } from '../CircleLoader';

export interface ButtonProps {
  onClick?: (event: React.MouseEvent<HTMLElement, MouseEvent>) => void;
  leftIcon?: ReactNode;
  rightIcon?: ReactNode;
  color?: Color;
  disabled?: boolean;
  size?: Size;
  type?: ButtonType;
  className?: string;
  isLoading?: boolean;
  element?: 'button' | 'div';
  children?: string | ReactNode;
}

interface StyledProps extends ThemeProps<DefaultTheme> {
  color: Color;
  size: Size;
  borderStyle: BorderStyle;
  disabled?: boolean;
  className?: string;
}

interface LoaderWrapperProps {
  isLoading: boolean;
}

const loaderWrapperWidth: NumberValues = 16;
const activeLoaderStyles = css`
  width: ${loaderWrapperWidth}px;
  margin-left: ${(p) => p.theme.spacings.small}px;
  opacity: 1;
`;
const loaderStyles = css`
  width: 0;
  margin-left: 0;
  opacity: 0;
`;

const LoaderWrapper = styled.div<LoaderWrapperProps>`
  overflow: hidden;
  transition: all 0.3s;
  ${(p) => (p.isLoading ? activeLoaderStyles : loaderStyles)}
`;

export const Button = React.forwardRef((props: ButtonProps) => {
  const {
    children,
    disabled,
    color = 'primary',
    leftIcon,
    rightIcon,
    size = 'medium',
    className,
    onClick,
    type = 'button',
    isLoading,
    element = 'button',
  } = props;

  const ButtonComponent: StyledComponent<any, DefaultTheme, StyledProps, never> =
    element === 'button' ? StyledButton : StyledDiv;

  return (
    <ButtonComponent
      color={color}
      size={size}
      className={className}
      onClick={isLoading || disabled ? null : onClick}
      type={type}
      disabled={disabled}
    >
      {leftIcon && (
        <LeftIcon icon={leftIcon} size={size} color={color} noMargin={children === undefined} />
      )}
      {children}
      {rightIcon && <RightIcon icon={rightIcon} size={size} color={color} />}
      <LoaderWrapper isLoading={!!isLoading}>
        <CircleLoader white small />
      </LoaderWrapper>
    </ButtonComponent>
  );
});

const buttonStyles = css`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  font-family: ${fontRegular};
  font-style: normal;
  font-weight: ${(p) => p.theme.fontWeights.medium};
  outline: none;
  cursor: pointer;
  white-space: nowrap;
  @media (hover) {
    &:hover {
      background-color: ${(p) => p.theme.colors.buttonHoverBackground};
      border-color: ${(p) => p.theme.colors.buttonHoverBackground};
      color: ${(p) => p.theme.colors.buttonHoverText};
      & svg * {
        fill: ${(p) => p.theme.colors.buttonHoverText};
      }
    }
  }
  border-radius: unset;
  ${(p: StyledProps) => buttonSizeStyle(p.size, p)};
  ${(p: StyledProps) => buttonColorStyle(p.color, p)};
`;

const StyledButton = styled.button<StyledProps>`
  ${buttonStyles}
`;

const StyledDiv = styled.div<StyledProps>`
  ${buttonStyles}
  ${(p) =>
    p.disabled &&
    `
    opacity: 0.5;
    color: ${p.theme.colors.disabled};
    border: 1px solid ${p.theme.colors.disabled};

    & svg * {
      fill: ${p.theme.colors.disabled};
    }
  `}
`;

export default Button;
