import React from 'react';
import { BrowserView, MobileView } from 'react-device-detect';
import styled from 'styled-components';

interface ExpenseProps {}

const ExpenseTemplate: React.FC<ExpenseProps> = ({ children }) => {
  return (
    <>
      <BrowserView>
        <main>{children}</main>
      </BrowserView>

      <MobileView>
        <MobileContainer>
          <main>{children}</main>
        </MobileContainer>
      </MobileView>
    </>
  );
};

export default ExpenseTemplate;

const MobileContainer = styled.div`
  main {
    text-align: center;
  }
`;
