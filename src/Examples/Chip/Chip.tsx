import React, { FC } from 'react';

export interface ChipProps {
  onClick: () => void;
  label: string;
  isActive: boolean;
  className?: string;
}

export const Chip: FC<ChipProps> = (props) => {
  return (
    <div className={props.className} onClick={props.onClick}>
      {props.label}
    </div>
  );
};
