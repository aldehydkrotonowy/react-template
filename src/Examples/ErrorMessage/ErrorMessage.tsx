import React, { FC } from 'react';
import styled from 'styled-components';

interface ErrorMessageComponentProps {
  isError?: boolean;
  touched?: boolean;
  message?: string;
}

export const ErrorMessage: FC<ErrorMessageComponentProps> = ({ touched, message, isError }) => {
  return (
    <ErrorWrapper>{touched && isError && <ErrorContent>{message}</ErrorContent>}</ErrorWrapper>
  );
};

const ErrorContent = styled.div`
  color: ${(p): string => p.theme.colors.error};
  font-size: 13px;
`;

const ErrorWrapper = styled.div`
  height: 20px;
  margin-top: 10px;
`;
