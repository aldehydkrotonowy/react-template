import React, { ReactNode, FC } from 'react';
import styled from 'styled-components';

export interface HyperLinkProps {
  href: string;
  target?: string;
  children: ReactNode;
  leftIcon?: ReactNode;
  className?: string;
  onClick?: () => void;
}

const HyperLinkComponent: FC<HyperLinkProps> = ({ href, target, children, leftIcon, className, onClick }) => (
  <div className={className} onClick={onClick}>
    {leftIcon && leftIcon}
    <a href={href} target={target}>{children}</a>
  </div>
);

export const HyperLink = styled(HyperLinkComponent)`
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: center;
  svg {
    fill {
      * {
        color: ${(p) => p.theme.colors.primary};
      }
    }
  }

  a {
    color: ${(p) => p.theme.colors.primary};
    font-size: ${(p) => p.theme.fontSizeSmall};
    text-decoration: none;
    letter-spacing: 0.14px;
    border-bottom: 1px solid ${(p) => p.theme.colors.primary};
  }
`;
