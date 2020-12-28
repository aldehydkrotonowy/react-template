import { Color, Size } from '../types';
import { css, FlattenSimpleInterpolation, ThemeProps } from 'styled-components';

export const buttonIconColorStyle = (
  color: Color,
  props: ThemeProps<any>,
): FlattenSimpleInterpolation => {
  const stylePrimary = `
  & * {
    fill: ${props.theme.colors.secondary};
  }
  `;

  const styleSecondary = `
  & * {
    fill: ${props.theme.colors.primary};
  }
  `;
  const style = color === 'primary' ? stylePrimary : styleSecondary;

  return css`
    ${style}
  `;
};

export const buttonIconSizeStyle = (size: Size): FlattenSimpleInterpolation => {
  let style;
  switch (size) {
    case 'small':
      style = `
      & svg {
        width: 10px;
        height: 10px;
      }
    `;
      break;
    case 'medium':
      style = `
        & svg {
          width: 22px; 
          height: 22px;
        }
      `;
      break;
    case 'large':
      style = `
        & svg {
          width: 32px; 
          height: 32px;
        }
      `;
      break;
  }
  return css`
    ${style}
  `;
};
