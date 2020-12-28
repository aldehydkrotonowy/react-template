import styled from 'styled-components';
import { Button } from '../../components/Button';
import { HyperLink } from '../../components/HyperLink';

export const FooterDiv = styled.div`
  background-color: ${(p) => p.theme.colors.primaryDark};
  color: ${(p) => p.theme.colors.secondary};
  left: 0;
  bottom: 0;
  width: 100%;
  margin-top: auto;
  padding-bottom: 48px;
`;

export const FooterColumns = styled.div`
  margin-left: 19.53%;
  margin-right: 19.53%;

  @media screen and (max-width: 1279px) {
    margin-left: 5%;
    margin-right: 5%;
  }
`;

export const FooterColumn = styled.div<{ noPadding?: boolean }>`
  padding-top: 32px;

  div {
    padding-bottom: ${(p) => (p.noPadding ? 0 : '5px')};
  }
`;

export const ContactButton = styled(Button)`
  &&& {
    border-color: ${(p) => p.theme.colors.contactButtonBackground};
    background-color: ${(p) => p.theme.colors.contactButtonBackground};
    margin-bottom: 31px;
    margin-top: 29px;
    padding-top: 22.5px;
    padding-bottom: 22.5px;
    color: ${(p) => p.theme.colors.contactButtonTextColor};
    transition: 0.2s ease-in-out;
    transition-property: background, color, border-color;

    @media screen and (min-width: 1280px) {
      width: 100%;
    }

    :hover,
    :focus {
      background-color: ${(p) => p.theme.colors.primary};
      border-color: ${(p) => p.theme.colors.primary};
    }

    :focus {
      outline: 2px solid ${(p) => p.theme.colors.contactButtonBackground};
      background-color: ${(p) => p.theme.colors.primary};
      border-color: ${(p) => p.theme.colors.primary};
    }
  }
`;

export const FooterHyperLink = styled(HyperLink)`
  &&& {
    a {
      color: ${(p) => p.theme.colors.secondary};
      border-left: 2px solid ${(p) => p.theme.colors.primaryDark};
      border-right: 2px solid ${(p) => p.theme.colors.primaryDark};
      border-top: 2px solid ${(p) => p.theme.colors.primaryDark};
      border-bottom: 1px solid ${(p) => p.theme.colors.secondary};
      font-size: 17px;
      fill: ${(p) => p.theme.colors.secondary};

      :hover,
      :focus {
        background-color: ${(p) => p.theme.colors.secondary};
        color: ${(p) => p.theme.colors.primaryDark};
        border-left: 2px solid ${(p) => p.theme.colors.secondary};
        border-right: 2px solid ${(p) => p.theme.colors.secondary};
        border-top: 2px solid ${(p) => p.theme.colors.secondary};
        border-bottom: 1px solid ${(p) => p.theme.colors.secondary};
        transition: 0.2s ease-in-out;
        transition-property: background, color, border-color;
        fill: ${(p) => p.theme.colors.primaryDark};
      }
    }
    padding-bottom: 27px;
  }
`;

export const FooterHyperLinkWithPadding = styled(FooterHyperLink)`
  &&& {
    padding-top: 80px;

    @media screen and (max-width: 959px) {
      padding-top: 0;
    }
  }
`;

export const SiteNameDiv = styled.div`
  &&& {
    font: normal normal normal 34px/45px PT Serif;
    padding-bottom: 35px;
  }
`;

export const HelpSectionTitle = styled.div`
  &&& {
    padding-top: 4px;
    font-size: 24px;
  }
`;

export const PhoneNumberTitle = styled.div`
  font-size: 18px;
`;

export const PhoneNumber = styled.div<{ noMargin?: boolean }>`
  font-size: 20px;
  font-weight: ${(p) => p.theme.fontWeights.medium};
  margin-bottom: ${(p) => (p.noMargin ? 0 : '24px')};
`;
