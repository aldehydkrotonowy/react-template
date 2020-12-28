import styled from 'styled-components';
import { Button } from '../Button';

export const StyledLinkButton = styled(Button)`
  background: none;
  padding: 0;
  border: none;
  color: ${(p): string => p.theme.colors.secondaryButtonText};
  font-size: ${(p): string => p.theme.fontSizeSmall};
  letter-spacing: 0.14px;
  border-bottom: 1px solid ${(p): string => p.theme.colors.secondaryButtonText};
  &:hover {
    color: ${(p): string => p.theme.colors.secondaryButtonText};
    background: none;
    border-bottom: 1px solid ${(p): string => p.theme.colors.secondaryButtonText};
  }
  font-weight: bold;
`;

type StyledLinkSize = 'large' | 'medium' | 'size';

export interface StyledLinkProps {
  size?: StyledLinkSize;
}

export const StyledLink = styled.div<StyledLinkProps | HTMLDivElement>`
  font-size: ${(props) =>
    props.size === 'large' ? '20' : props.size === 'medium' ? '18' : '15'}px;
  text-decoration: underline;
  cursor: pointer;
  color: ${(p) => p.theme.colors.primaryButtonBackground};
  font-weight: ${(p) => p.theme.fontWeights.medium};
`;
