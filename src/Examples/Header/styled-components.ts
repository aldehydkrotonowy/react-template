import styled from 'styled-components';
import { Paragraph, H1 } from '../../components/Typography';
import { Row } from '../../components/Grid';
import { Container } from '../../components/Container';
import { deviceSizes } from '../../styles';
import { MenuClosed, MenuOpen } from '../../components/Icons';
import { StyledLink } from '../../components/LinkButton';

export const HeaderDiv = styled.div`
  display: flex;
  background-color: ${(p) => p.theme.colors.boxBackground};
  color: ${(p) => p.theme.colors.boxBackground};
  border-bottom: 1px solid ${(p) => p.theme.colors.grayLine};
  width: 100%;
  justify-content: flex-start;
  align-items: center;
  padding-top: 20px;
  padding-bottom: 20px;
  box-shadow: 0 3px 6px rgba(0, 0, 0, 0.1);
  & span {
    color: ${(p) => p.theme.colors.black};
    font-size: ${(p) => p.theme.fontSizes.H2};
    margin-left: ${(p) => `${p.theme.spacings.medium}px`};
    margin-right: ${(p) => `${p.theme.spacings.extraLarge}px`};
  }
  @media screen and (max-width: ${deviceSizes.mobile}) {
    padding: 0;
  }
`;

export const StyledContainer = styled(Container)`
  flex: 1 0 75%;
  height: auto;
  justify-content: space-between;
  align-items: center;
  margin: 0;
  max-width: 100%;
  @media screen and (max-width: ${deviceSizes.mobile}) {
    flex-direction: column;
  }
`;

export const StyledRow = styled(Row)`
  width: 100%;
  margin: 0;
  cursor: pointer;
  @media screen and (max-width: ${deviceSizes.mobile}) {
    padding: 16px 0;
  }
`;

export const StyledParagraph = styled(Paragraph)`
  margin-bottom: 0;
  margin-top: 0;
  @media screen and (max-width: ${deviceSizes.mobile}) {
    font-size: ${(p) => `${p.theme.fontSizeLarge}`};
  }
`;

export const RedStripe = styled.div<{ maxWidth?: string }>`
  flex: 0 1 25%;
  height: 58px;
  background-color: ${(p) => p.theme.colors.red};
  ${(p) => (p.maxWidth ? `max-width: ${p.maxWidth}` : '')};
`;

export const StyledH1 = styled(H1)`
  width: auto;
  margin-right: ${(p) => `${p.theme.spacings.extraLarge}px`};
  margin-left: ${(p) => `${p.theme.spacings.extraLarge}px`};
  margin-bottom: 0;
  font: normal normal normal 34px/45px PT Serif;
  white-space: nowrap;
`;

export const StyledHyperLink = styled(StyledLink)`
  margin-right: ${(p) => p.theme.spacings.huge}px;
`;

export const StyledText = styled.div`
  margin-right: 10px;
`;

export const StyledMenu = styled(MenuClosed)`
  margin: auto;
  font-size: 42px;
  & path {
    fill: ${(p): string => p.theme.colors.secondaryButtonText};
  }
`;

export const StyledArrowDown = styled(MenuOpen)`
  margin: auto;
  font-size: 42px;
  & path {
    fill: ${(p): string => p.theme.colors.secondaryButtonText};
  }
`;

export const MenuButtonWrapper = styled.div`
  flex: 1;
  display: flex;
  justify-content: center;
`;

export const MenuItem = styled(Row)`
  width: 100%;
  padding: 12px 0;
`;

export const MenuWrapper = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  width: 100%;
  padding: 0 30px;
  border-top: 1px solid #d8d8d8;
`;

interface LinksContainerProps {
  noStretch?: boolean;
}

export const LinksContainer = styled.div<LinksContainerProps>`
  display: flex;
  align-items: center;
  margin-right: 32px;
  flex: ${(props) => (props.noStretch ? '1 0 50%' : '')};
`;
