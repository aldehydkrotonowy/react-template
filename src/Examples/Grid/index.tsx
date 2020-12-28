import styled, { FlattenSimpleInterpolation, css } from 'styled-components';
import { ContrastIcon, HelpIcon } from '../Icons';

type FlexJustifyType =
  | 'flex-start'
  | 'flex-end'
  | 'center'
  | 'space-between'
  | 'space-around'
  | 'space-evenly';

type FlexAlignType = 'flex-start' | 'flex-end' | 'center' | 'stretch' | 'baseline' | 'normal';

interface FlexProps {
  justify?: FlexJustifyType;
  align?: FlexAlignType;
  alignSelf?: 'auto' | FlexAlignType;
}

export interface RowProps extends FlexProps {
  direction?: 'vertical' | 'horizontal';
}
interface ColProps extends FlexProps {}

const flexStyle = <T extends FlexProps>(flexProps: T): FlattenSimpleInterpolation => css`
  justify-content: ${flexProps.justify};
  align-items: ${flexProps.align};
  align-self: ${flexProps.alignSelf};
`;

export const Row = styled.div<RowProps>`
  display: flex;
  flex-direction: ${(p) => (p.direction === 'vertical' ? 'column' : 'row')};
  ${(p) => flexStyle(p)};
`;

export const Col = styled.div<ColProps>`
  width: 100%;
  display: flex;
  flex-direction: column;
  ${(p) => flexStyle(p)};
`;

export const StyledHelpIcon = styled(HelpIcon)`
  fill: ${(p) => p.theme.colors.primary};
`;

export const StyledContrastIcon = styled(ContrastIcon)`
  fill: ${(p) => p.theme.colors.primary};
`;
