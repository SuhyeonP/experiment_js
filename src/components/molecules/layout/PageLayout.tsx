import { TChildren } from '../../../types/common';
import { ReactNode } from 'react';
import { Text } from '../../atom/text/Text';
import { PageLayoutStyled } from './layout.styled';
import { useInternalRouter } from 'hook/routing';

type PageLayoutProps = {
  title: string;
} & TChildren<ReactNode>;

export const PageLayout = ({ children, title }: PageLayoutProps): JSX.Element => {
  const router = useInternalRouter();
  return (
    <PageLayoutStyled className={'pageLayout'}>
      <div className={'pageRoute'}>
        {['js', 'css', 'react'].map(route => (
          <button key={route} onClick={() => router.push(`/${route}`)}>
            {route.toUpperCase()}
          </button>
        ))}
      </div>
      <div className={'pageLayoutHeader layoutHeader'}>
        <Text className={'pageLayoutTitle layoutTitle'}>{title.toUpperCase()}</Text>
      </div>
      <div className={'pageLayoutChildren layoutChildren'}>{children}</div>
    </PageLayoutStyled>
  );
};
