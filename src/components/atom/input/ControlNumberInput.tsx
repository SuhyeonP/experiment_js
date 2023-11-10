import { ChangeEvent, forwardRef } from 'react';
import { NumberInputStyled } from './input.styled';
import { IComponentCommonProps } from '../../../types/common';

export type NumberInputProps = {
  value: number;
  onChange: (event: ChangeEvent<HTMLInputElement>) => void;
  min?: number;
  max?: number;
  placeholder?: string;
} & IComponentCommonProps;

export const ControlNumberInput = forwardRef<HTMLInputElement, NumberInputProps>(
  ({ value, onChange, min = 0, max = Number.MAX_SAFE_INTEGER, placeholder, className }: NumberInputProps, ref) => {
    return (
      <NumberInputStyled className={className}>
        <input value={value} onChange={onChange} ref={ref} min={min} max={max} placeholder={placeholder} />
      </NumberInputStyled>
    );
  }
);
