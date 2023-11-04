import { TChildren } from '../../../types/common';
import { ReactNode } from 'react';
import { Text } from '../../atom/text/Text';
import { PageLayoutStyled } from './layout.styled';

type PageLayoutProps = {
  title: string;
} & TChildren<ReactNode>;

export const PageLayout = ({ children, title }: PageLayoutProps): JSX.Element => {
  return (
    <PageLayoutStyled className={'pageLayout'}>
      <div className={'pageLayoutHeader layoutHeader'}>
        <Text className={'pageLayoutTitle layoutTitle'}>{title}</Text>
      </div>
      <div className={'pageLayoutChildren layoutChildren'}>{children}</div>
    </PageLayoutStyled>
  );
};
