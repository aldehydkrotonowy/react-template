import React, { ReactNode, FC } from 'react';
import styled from 'styled-components';
import { border } from '../../styles';

interface BoxProps {
  children: ReactNode;
  title?: string;
  className?: string;
}

interface BoxDetailProps {
  label: string;
  className?: string;
}

export const Box: FC<BoxProps> = ({ children, className, title }) => (
  <div className={className}>
    {title && <BoxTitle>{title}</BoxTitle>}
    {children}
  </div>
);

const StyledBoxDetail = styled.div`
  color: black;
  margin-bottom: ${(p) => p.theme.spacings.large}px;
  font-size: ${(p) => p.theme.fontSize};
  font-weight: ${(p) => p.theme.fontWeights.medium};
  span {
    display: block;
    text-transform: uppercase;
    color: ${(p) => p.theme.colors.grayMedium};
    font-size: ${(p) => p.theme.fontSizeSmall};
    margin-bottom: ${(p) => p.theme.spacings.small}px;
    font-weight: ${(p) => p.theme.fontWeights.regular};
  }
`;
export const BoxDetail: FC<BoxDetailProps> = ({ label, children, className }) => (
  <StyledBoxDetail className={className}>
    <span>{label}</span>
    {children}
  </StyledBoxDetail>
);

export const BoxTitle = styled.span`
  display: block;
  font-size: ${(p) => p.theme.fontSizeLarge};
  color: black;
  margin-bottom: ${(p) => p.theme.spacings.extraLarge}px;
  font-weight: ${(p) => p.theme.fontWeights.regular};
`;

export default styled(Box)`
  ${border}
  color: black;
  background: white;
  text-align: left;
  width: 100%;
  padding: ${(p) => p.theme.spacings.extraLarge}px;
`;
