import { forwardRef, useImperativeHandle, useRef } from 'react';
import { NumberInputStyled } from './input.styled';
import { IComponentCommonProps } from '../../../types/common';

export type NumberInputProps = {
  min?: number;
  max?: number;
  placeholder?: string;
} & IComponentCommonProps;

export const RefNumberInput = forwardRef<HTMLInputElement, NumberInputProps>(
  ({ min = 0, max = Number.MAX_SAFE_INTEGER, placeholder, className }: NumberInputProps, ref) => {
    const inputRef = useRef<HTMLInputElement>(null);
    useImperativeHandle(ref, () => inputRef.current as HTMLInputElement);

    return (
      <NumberInputStyled className={className}>
        <input ref={inputRef} min={min} max={max} placeholder={placeholder} />
      </NumberInputStyled>
    );
  }
);
