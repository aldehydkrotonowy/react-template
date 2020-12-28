import React, { FC } from 'react';
import { useTranslation } from 'react-i18next';
import {
  StyledH3,
  SectionContent,
  SectionTitle,
  StyledBoxContainer,
  StyledButton,
  StyledRow,
  BoxActions,
} from './styled-components';
import { countriesDict, documentTypesDict } from '../../constants';

const PESEL_ROOT = '2.16.840.1.113883.3.4424.1.1.616';

export interface PatientContextProps {
  firstName?: string;
  lastName?: string;
  root?: string;
  ext?: string;
  msisdn?: string;
  email?: string;
  onExit?: () => void;
  onEditData?: () => void;
}

export const PatientContext: FC<PatientContextProps> = ({
  firstName,
  lastName,
  root,
  ext,
  msisdn,
  email,
  onExit,
  onEditData,
}) => {
  const { t } = useTranslation();

  const divideRoot = (): string[] | undefined[] => {
    const index = root?.lastIndexOf('.');
    if (!root || !index) {
      return [undefined, undefined];
    } else return [root?.slice(0, index), root?.slice(index + 1)];
  };

  const rootLabel = () => {
    if (root === PESEL_ROOT) {
      return `${t('searchPatient.pesel')}:`;
    }
    const [documentTypeId, countryId] = divideRoot();
    if (!countryId || !documentTypeId) {
      return undefined;
    } else {
      return `${countriesDict[countryId]}, ${documentTypesDict[documentTypeId]}:`;
    }
  };

  return (
    <StyledBoxContainer>
      <div>
        <StyledRow>
          <StyledH3>{`${firstName} ${lastName}`}</StyledH3>
        </StyledRow>
        <StyledRow>
          <SectionTitle>{rootLabel()}</SectionTitle>
          <StyledH3>{ext}</StyledH3>
        </StyledRow>
        <StyledRow>
          <SectionTitle>{t('patient_context.phone_number')}</SectionTitle>
          <SectionContent>{msisdn}</SectionContent>
        </StyledRow>
        <StyledRow noMargin>
          <SectionTitle>{t('patient_context.email_address')}</SectionTitle>
          <SectionContent>{email}</SectionContent>
        </StyledRow>
      </div>
      <BoxActions>
        {onExit && (
          <StyledButton color="primary" onClick={onExit}>
            {t('patient_context.exit')}
          </StyledButton>
        )}
        {onEditData && (
          <StyledButton color="secondary" noMargin onClick={onEditData}>
            {t('patient_context.edit_data')}
          </StyledButton>
        )}
      </BoxActions>
    </StyledBoxContainer>
  );
};
