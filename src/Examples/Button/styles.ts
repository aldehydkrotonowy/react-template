import { Color, Size } from './types';
import { css, FlattenSimpleInterpolation, ThemeProps } from 'styled-components';

export const buttonColorStyle = (
  color: Color,
  props: ThemeProps<any>,
): FlattenSimpleInterpolation => {
  const styles = {
    gray: `
    background-color: ${props.theme.colors.transparent};
    border: 2px solid ${props.theme.colors.grayLine};
    color: ${props.theme.colors.grayMedium};

    & svg * {
      fill: ${props.theme.colors.grayMedium};
    }

    &:disabled {
      opacity: 0.5;
    }
  `,
    primary: `
    background-color: ${props.theme.colors.primaryButtonBackground};
    border: 2px solid ${props.theme.colors.primaryButtonBorder};
    color: ${props.theme.colors.primaryButtonText};

    &:disabled {
      opacity: 0.5;
    }
  `,
    secondary: `
    background-color: ${props.theme.colors.secondaryButtonBackground};
    border: 2px solid ${props.theme.colors.secondaryButtonBorder};
    color: ${props.theme.colors.secondaryButtonText};

    &:disabled {
      opacity: 0.5;
    }
  `,
  };
  return css`
    ${styles[color]}
  `;
};

export const buttonSizeStyle = (size: Size, props: ThemeProps<any>): FlattenSimpleInterpolation => {
  let style;
  switch (size) {
    case 'small':
      style = `
      padding: 8px 16px;
      font-size: ${props.theme.fontSizeSmall};
      line-height: 19px;
      font-weight: 500;

      svg {
        width: 18px;
        height: 18px;
      }
    `;
      break;
    case 'medium':
      style = `
        padding: 16px 32px;
        font-size: ${props.theme.fontSizeButtonMedium};
        line-height: ${props.theme.fontSizeButtonMedium};
        font-weight: 500;
      `;
      break;
    case 'large':
      style = `
        font-size: ${props.theme.fontSizeLarge};
        line-height: 24px;
        height: 64px;
        font-weight: 500;
      `;
      break;
  }
  return css`
    ${style}
  `;
};
