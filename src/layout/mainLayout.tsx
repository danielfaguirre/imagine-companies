import { ReactNode } from 'react';
import { MainContainer } from './styles';

export type MainLayoutType = {
  children: ReactNode
}

export const MainLayout = ({ children }: MainLayoutType) => {
  return (
    <MainContainer>
      {children}
    </MainContainer>
  )
}
