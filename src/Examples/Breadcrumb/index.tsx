import styled from 'styled-components';
import React, { FC } from 'react';
import { StyledLink } from '../LinkButton';
import { Row } from '../Grid';
import { Paragraph } from "../Typography";

const BreadcrumbContainer = styled(Row)`
  margin-bottom: 44px;
`;

const Breadcrumb = styled(StyledLink)`
  font-size: 15px;
  margin-right: 10px;
  margin-bottom: 0;
`;

const BreadcrumbDivider = styled(Paragraph).attrs((_) => ({ children: '>' }))`
  font-size: 15px;
  font-weight: {(p) => p.theme.fontWeights.medium};
  margin-right: 10px;
  margin-bottom: 0;
  margin-top: 0;
`;

interface BreadcrumbItem {
  name: string;
  onClick: () => void;
}

interface BreadcrumbsProps {
  crumbs: BreadcrumbItem[];
}

export const Breadcrumbs: FC<BreadcrumbsProps> = ({ crumbs }) => {
  return (
    <BreadcrumbContainer>
      {crumbs.map((crumb, i) => (
        <Row key={i}>
          <Breadcrumb onClick={crumb.onClick}>{crumb.name}</Breadcrumb>
          {i < crumbs.length - 1 && <BreadcrumbDivider />}
        </Row>
      ))}
    </BreadcrumbContainer>
  );
};
