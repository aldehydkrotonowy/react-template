import React, { FC, ReactNode } from 'react';
import styled from 'styled-components';
import { Color, Size } from '../types';
import { buttonIconColorStyle, buttonIconSizeStyle } from './styles';

interface IconProps {
  icon?: ReactNode;
  className?: string;
  noMargin?: boolean;
  color: Color;
  size: Size;
}

const Icon: FC<IconProps> = ({ className, icon }) => {
  return <div className={className}>{icon}</div>;
};

const ButtonIcon = styled(Icon)`
  display: flex;
  flex-direction: column;
  ${(p) => buttonIconColorStyle(p.color, p)};
  ${(p) => buttonIconSizeStyle(p.size)};
`;

export const LeftIcon = styled(ButtonIcon)`
  margin-right: ${(p) => (p.noMargin ? 0 : '13px')};
`;
export const RightIcon = styled(ButtonIcon)`
  margin-left: 13px;
`;
