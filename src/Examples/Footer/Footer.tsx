import React, { FC } from 'react';
import {
  FooterColumn,
  FooterColumns,
  FooterDiv,
  FooterHyperLink,
  ContactButton,
  FooterHyperLinkWithPadding,
  SiteNameDiv,
  HelpSectionTitle,
  PhoneNumberTitle,
  PhoneNumber,
} from './styled-components';
import { useTranslation } from 'react-i18next';
import Grid from '@material-ui/core/Grid';
import { ExternalIcon } from '../../components/Icons';

const redirectToContactUsPage: () => void = () => {
  window.open('https://pacjent.gov.pl/skontaktuj-sie-z-nami', '_blank');
};

export const Footer: FC = () => {
  const { t } = useTranslation();
  return (
    <FooterDiv>
      <FooterColumns>
        <Grid container>
          <Grid item xs={12} sm={6} md={4}>
            <FooterColumn>
              <SiteNameDiv>{t('common.footer.sitename')}</SiteNameDiv>
              <FooterHyperLink href="https://www.gov.pl/web/zdrowie" target="_blank">
                {t('common.footer.minstry_of_health')} <ExternalIcon />
              </FooterHyperLink>
              <FooterHyperLink href="http://www.nfz.gov.pl/" target="_blank">
                {t('common.footer.NFZ')} <ExternalIcon />
              </FooterHyperLink>
            </FooterColumn>
          </Grid>
          <Grid item xs={12} sm={6} md={4}>
            <FooterColumn>
              <FooterHyperLinkWithPadding href="#">
                {t('common.footer.how_to_use')}
              </FooterHyperLinkWithPadding>
              <FooterHyperLink href="#">
                {t('common.footer.service_conditions')} <ExternalIcon />
              </FooterHyperLink>
              <FooterHyperLink href="#">
                {t('common.footer.accessibility_declaration')} <ExternalIcon />
              </FooterHyperLink>
              <FooterHyperLink href="#">
                {t('common.footer.privacy_policy')} <ExternalIcon />
              </FooterHyperLink>
            </FooterColumn>
          </Grid>
          <Grid item xs={12} sm={12} md={4}>
            <FooterColumn noPadding>
              <Grid container>
                <Grid item xs={12} sm={6} md={12}>
                  <HelpSectionTitle>{t('common.footer.help_needed')}</HelpSectionTitle>
                  <ContactButton onClick={redirectToContactUsPage}>
                    {t('common.footer.contact_us')}
                  </ContactButton>
                </Grid>
                <Grid item xs={12} sm={6} md={12}>
                  <PhoneNumberTitle>{t('common.footer.patient_information_line')}</PhoneNumberTitle>
                  <PhoneNumber>{t('common.footer.patient_information_line_number')}</PhoneNumber>
                  <PhoneNumberTitle>{t('common.footer.IKP_line')}</PhoneNumberTitle>
                  <PhoneNumber noMargin>{t('common.footer.IKP_line_number')}</PhoneNumber>
                </Grid>
              </Grid>
            </FooterColumn>
          </Grid>
        </Grid>
      </FooterColumns>
    </FooterDiv>
  );
};
