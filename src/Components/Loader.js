import React from 'react';
import styled from 'styled-components';

const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 30px;
  height: 100%;
`;

const Loader = () => <Container>🔴🟠🟡🟢🔵🟣🟤⚫⚪</Container>;

export default Loader;
