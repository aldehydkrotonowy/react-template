import styled from 'styled-components';
import { Container, H3, H5, Row, Button } from "../../components";

export const BoxActions = styled.div`
  &&& {
    text-align: right;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    height: 100%;
  }
`;

export const StyledBoxContainer = styled(Container)`
  margin-bottom: 50px;
  padding: 30px;
  left: 0;
  right: 0;

  &&& {
    background-color: ${(p) => p.theme.colors.boxBackground};
    border: 1px solid ${(p) => p.theme.colors.boxBorder};
    justify-content: space-between;

    @media only screen and (max-width: 1200px) {
      flex-direction: column;
    }
  }
`

export const StyledButton = styled(Button)<{ noMargin?: boolean }>`
  width: 302px;
  height: 42px;
  margin-bottom: ${(p) => (p.noMargin ? 0 : '20px')};
`;

export const SectionTitle = styled(H5)`
  margin-bottom: 0;
  margin-right: 3px;
`;

export const SectionContent = styled(H5)`
  margin-bottom: 0;
  margin-right: 3px;
  font-weight: ${(p) => p.theme.fontWeights.medium};
`;

export const StyledH3 = styled(H3)`
  height: 28px;
  font-size: 24px;
  margin-bottom: 0;
`;

export const StyledRow = styled(Row).attrs((_) => ({ align: 'flex-end' }))<{ noMargin?: boolean }>`
  margin-bottom: ${(p) => (p.noMargin ? 0 : '12px')};
`;
