import { IComponentCommonProps, TChildren } from '../../../types/common';
import { ElementType, forwardRef, Fragment } from 'react';
import { TextStyled } from './text.styled';

export type TextProps = {
  as?: ElementType;
  stringToJSX?: boolean;
} & TChildren<string | string[]> &
  IComponentCommonProps;

export const Text = forwardRef<HTMLParagraphElement, TextProps>(
  ({ children, className, stringToJSX, as = 'p', role, htmlAttributes }: TextProps, ref) => {
    return (
      <TextStyled as={as} className={className} role={role} {...(htmlAttributes as any)} ref={ref}>
        {stringToJSX ? convertNewLineToJSX(children as unknown as string) : children}
      </TextStyled>
    );
  }
);

export function convertNewLineToJSX(str: string) {
  return str.split('\n').map((line, index) => (
    <Fragment key={index}>
      {index > 0 ? <br /> : ''}
      {line}
    </Fragment>
  ));
}
