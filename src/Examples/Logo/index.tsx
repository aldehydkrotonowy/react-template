import React, { FC } from 'react';
import { EagleIcon } from '../Icons';
import styled from 'styled-components';
import { deviceSizes } from '../../styles/devices';

const Logo: FC<{ className?: string }> = ({ className }) => (
  <div className={className}>
    <EagleIcon />
  </div>
);

export default styled(Logo)`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 58px;
  min-width: 58px;
  background-color: ${(p) => p.theme.colors.red};
  @media screen and (max-width: ${deviceSizes.mobile}) {
    margin: -16px 0;
    height: 81px;
    width: 102px;
    justify-content: flex-end;
    padding-right: 18px;
  }
`;
