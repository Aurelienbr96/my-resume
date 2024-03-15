import { SyntheticEvent } from 'react';
import ReactSwitch from 'react-switch';

export type SwitchProps = {
  disabled?: boolean;
  checked: boolean;
  className?: string;
  onChange: (
    checked: boolean,
    event: MouseEvent | SyntheticEvent<MouseEvent | KeyboardEvent, Event>,
    id: string,
  ) => void;
};

export const Switch = ({
  disabled,
  checked,
  className,
  onChange,
}: SwitchProps) => (
  <ReactSwitch
    className={className}
    uncheckedIcon={false}
    checkedIcon={false}
    disabled={disabled}
    onChange={onChange}
    onColor="#EF6C35"
    offColor="#A2A2A2"
    checked={checked}
    height={15}
    handleDiameter={13}
    width={32}
  />
);
