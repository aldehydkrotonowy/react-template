import React, { FC, useRef } from 'react';
import 'react-datepicker/dist/react-datepicker.css';
import ReactDatePicker, { ReactDatePickerProps } from 'react-datepicker';
import { pl } from 'date-fns/locale';
import styled from 'styled-components';
import { Row } from '../Grid';
import Button from '../Button';
import { Calendar } from '../Icons';
import { fontRegular } from '../../styles';

const StyledCalendar = styled(Calendar)`
  & path {
    fill: ${(p): string => p.theme.colors.secondaryButtonText};
  }
`;

const StyledRow = styled(Row)`
  border: 1px solid ${(p) => p.theme.colors.inputBorderColor};
  border-radius: 3px;
  width: 160px;
  height: 38px;
  position: relative;

  .react-datepicker {
    font-family: ${fontRegular};
    border: ${(p) => `1px solid ${p.theme.colors.inputBorderColor}`};
  }

  .react-datepicker__header {
    background-color: ${(p) => p.theme.colors.grayDisabled};
    border-bottom: ${(p) => `1px solid ${p.theme.colors.inputBorderColor}`};
  }

  .react-datepicker__current-month {
    color: ${(p) => p.theme.colors.text};
  }

  .react-datepicker__day-name {
    color: ${(p) => p.theme.colors.text};
  }

  .react-datepicker__navigation--next {
    border-left-color: ${(p) => p.theme.colors.grayMedium};
  }

  .react-datepicker__navigation--previous {
    border-right-color: ${(p) => p.theme.colors.grayMedium};
  }

  .react-datepicker__month-container {
    background: ${(p) => p.theme.colors.boxBackground};
    border-radius: 0.3rem;
  }

  .react-datepicker__day-name,
  .react-datepicker__day,
  .react-datepicker__time-name {
    color: ${(p) => p.theme.colors.text};
  }

  .react-datepicker__day--selected {
    background-color: ${(p)=>p.theme.colors.primary};
    color: ${(p)=>p.theme.colors.listItemBackground};
  }
  
  .react-datepicker__day:hover {
    background-color: ${(p) => p.theme.colors.buttonHoverBackground};
    color: ${(p)=>p.theme.colors.listItemBackground};
  }
`;

const StyledDatePicker = styled(ReactDatePicker)`
  border: none;
  height: 36px;
  width: 108px;
  text-align: center;
  font-family: ${fontRegular};
  font-size: ${(p) => p.theme.fontSize};
  color: ${(p) => p.theme.colors.text};
  background: ${(p) => p.theme.colors.boxBackground};
`;

const StyledButton = styled(Button)`
  border: none;
`;

export const DatePicker: FC<ReactDatePickerProps & { label: string; required?: boolean }> = ({
  value,
  ...props
}) => {
  const ref = useRef<ReactDatePicker>(null);

  return (
    <StyledRow>
      <StyledDatePicker
        {...props}
        ref={ref}
        dateFormat="dd.MM.yyyy"
        locale={pl}
        selected={(value && new Date(parseInt(value))) || null}
      />
      <StyledButton
        leftIcon={<StyledCalendar />}
        onClick={() => ref.current?.setOpen(!ref.current?.isCalendarOpen())}
        size="small"
        color="secondary"
      />
    </StyledRow>
  );
};
