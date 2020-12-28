import React, { FC, useState } from 'react';
import Logo from '../../components/Logo';
import {
  HeaderDiv,
  RedStripe,
  StyledContainer,
  StyledH1,
  StyledHyperLink,
  StyledParagraph,
  StyledRow,
  StyledText,
  StyledMenu,
  StyledArrowDown,
  MenuWrapper,
  MenuItem,
  MenuButtonWrapper,
  LinksContainer,
} from './styled-components';
import { useTranslation } from 'react-i18next';
import { Col, Row, StyledContrastIcon, StyledHelpIcon } from '../../components/Grid';
import { StyledLink } from '../../components/LinkButton';
import { formatHeaderSubtitle } from '../../helpers';
import { useMobile } from '../../hooks';
import Button from '../../components/Button';

interface HeaderProps {
  onClickLogo?: () => void;
  onClickHelp?: () => void;
  onClickContrast?: () => void;
  onClickLogout?: () => void;
  noStretch?: boolean;
  showLogout?: boolean;
  maxWidth?: string;
}

export const Header: FC<HeaderProps> = ({
  onClickLogo,
  onClickHelp,
  onClickContrast,
  onClickLogout,
  noStretch,
  showLogout,
  maxWidth,
}) => {
  const { t } = useTranslation();
  const [subtitle1, subtitle2] = formatHeaderSubtitle(t('common.header.subtitle'));
  const isMobile = useMobile();
  const [menuOpen, setMenuOpen] = useState(false);

  if (isMobile) {
    return (
      <HeaderDiv>
        <StyledContainer>
          <StyledRow align="center">
            <Logo />
            <StyledH1>{t('common.header.title')}</StyledH1>
            <MenuButtonWrapper>
              {menuOpen && (
                <StyledArrowDown
                  onClick={() => {
                    setMenuOpen(false);
                  }}
                />
              )}
              {!menuOpen && (
                <StyledMenu
                  onClick={() => {
                    setMenuOpen(true);
                  }}
                />
              )}
            </MenuButtonWrapper>
          </StyledRow>

          {menuOpen && (
            <MenuWrapper>
              <MenuItem>
                <Col>
                  <StyledParagraph>{t('common.header.mobile_subtitle')}</StyledParagraph>
                </Col>
              </MenuItem>
              <MenuItem>
                <StyledLink onClick={onClickHelp}>
                  <Row>
                    <StyledText>{t('common.header.help')}</StyledText>
                    <StyledHelpIcon />
                  </Row>
                </StyledLink>
              </MenuItem>
              <MenuItem>
                <StyledLink onClick={onClickContrast}>
                  <Row>
                    <StyledText>{t('common.header.contrast')}</StyledText>
                    <StyledContrastIcon />
                  </Row>
                </StyledLink>
              </MenuItem>
              <MenuItem>
                <Button onClick={onClickLogout} color="primary">
                  {t('common.header.logout')}
                </Button>
              </MenuItem>
            </MenuWrapper>
          )}
        </StyledContainer>
      </HeaderDiv>
    );
  } else {
    return (
      <HeaderDiv>
        <RedStripe maxWidth={maxWidth} />
        <StyledContainer>
          <StyledRow align="center" onClick={onClickLogo}>
            <Logo />
            <StyledH1>{t('common.header.title')}</StyledH1>
            <Col>
              <StyledParagraph>{subtitle1}</StyledParagraph>
              <StyledParagraph>{subtitle2}</StyledParagraph>
            </Col>
          </StyledRow>
          <LinksContainer noStretch={noStretch}>
            <StyledHyperLink onClick={onClickHelp}>
              <Row>
                <StyledText>{t('common.header.help')}</StyledText>
                <StyledHelpIcon />
              </Row>
            </StyledHyperLink>
            {onClickContrast && (
              <StyledHyperLink onClick={onClickContrast}>
                <Row>
                  <StyledText>{t('common.header.contrast')}</StyledText>
                  <StyledContrastIcon />
                </Row>
              </StyledHyperLink>
            )}
            {showLogout && (
              <Button onClick={onClickLogout} color="primary">
                {t('common.header.logout')}
              </Button>
            )}
          </LinksContainer>
        </StyledContainer>
      </HeaderDiv>
    );
  }
};
