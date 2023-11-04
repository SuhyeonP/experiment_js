import { AllHTMLAttributes } from 'react';

export type TChildren<T> = {
  children: T;
};

export type IComponentCommonProps = {
  className?: string;
  role?: string;
  htmlAttributes?: AllHTMLAttributes<any>;
};

export type IExplainProps = {
  title: string;
  subTitle: string;
  tmi?: string[] | string;
};
