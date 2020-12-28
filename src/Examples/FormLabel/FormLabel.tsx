import React, { FC } from 'react';
import { RequiredIndicator } from '../RequiredIndicator';
import styled from 'styled-components';

interface FormLabelProps {
  label?: string;
  marginRight?: boolean;
  required?: boolean;
  className?: string;
  inline?: boolean;
}

const FormLabelComponent: FC<FormLabelProps> = ({
  label = '',
  marginRight = false,
  required = false,
  className,
}): React.ReactElement => {
  return (
    <div className={className}>
      <NormalText marginRight={marginRight}>{label}</NormalText>
      {required ? <RequiredIndicator /> : null}
    </div>
  );
};

// content: \\200b - /* unicode zero width space character */
const NormalText = styled.span<FormLabelProps>`
  color: ${(p): string => p.theme.colors.text};
  font-size: 17px;
  display: inline-block;
  :empty:before {
    content: \\200b;
  }
`;

export const FormLabel = styled(FormLabelComponent)<FormLabelProps>`
  display: ${(p): string => {
    return p.inline ? 'inline-block' : 'block';
  }};
  margin-bottom: 11px;
  margin-top: 0;
  margin-right: ${(p): string => (p.inline ? '10px' : '0px')};
`;
