import styled from 'styled-components';
import { THEME } from '../utils/theme';

export const PageContainer = styled.main`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const ContentContainer = styled.div`
  max-width: 400px;
`;

export const PageTitle = styled.h1<{ color?: string }>`
  text-align: center;
  text-transform: uppercase;
  color: ${({ color }) => (color ? color : THEME.main)};
`;

export const StyledLinkButton = styled.button`
  background-color: transparent;
  color: ${THEME.main};
  border: none;
  cursor: pointer;
`;

export const StyledSmallText = styled.p`
  font-style: italic;
  text-align: right;
  font-size: 12px;
`;

export const StyledArticle = styled.article`
  text-align: justify;
`;
