import React from 'react';
import styled from 'styled-components';
import { media } from '../../libs/styles';

interface PageTemplateProps {}

const PageTemplate: React.FC<PageTemplateProps> = ({ children }) => {
  return <Container>{children}</Container>;
};

export default PageTemplate;

// Styles
const Container = styled.div`
  margin-top: 58px;
  padding: 1rem;

  width: 1200px;
  margin-left: auto;
  margin-right: auto;

  ${media.wide} {
    width: 992px;
  }

  ${media.desktop} {
    width: 100%;
  }
`;
