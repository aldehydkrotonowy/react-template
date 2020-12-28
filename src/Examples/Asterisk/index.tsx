import React, { FC } from 'react';
import styled from 'styled-components';

export const Asterisk: FC = () => {
  return <AsteriskSpan>*</AsteriskSpan>;
};

const AsteriskSpan = styled.span`
  color: #ff0000;
`;
