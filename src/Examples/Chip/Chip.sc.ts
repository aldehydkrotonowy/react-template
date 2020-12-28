import styled from 'styled-components';
import { Chip } from './Chip';

export interface StyledChipProps {
  onClick: () => void;
  isActive: boolean;
  label: string;
  className?: string;
}

export const StyledChip = styled(Chip)<StyledChipProps>`
  font-size: ${(p): string => p.theme.fontSize};
  padding: 5px 15px;
  margin-left: 5px;
  color: ${(p): string => {
    return p.isActive ? p.theme.colors.primaryButtonText : p.theme.colors.secondaryButtonText;
  }};
  border-radius: 15px;
  border: 1px solid ${(p): string => p.theme.colors.secondaryButtonText};
  background: ${(p): string => {
    return p.isActive
      ? p.theme.colors.primaryButtonBackground
      : p.theme.colors.secondaryButtonBackground;
  }};
  cursor: pointer;
`;
