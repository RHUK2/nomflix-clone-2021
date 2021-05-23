import React from 'react';
import styled, { keyframes } from 'styled-components';

const SkScaleout = keyframes`
  from { 
    transform: scale(0);
  } to {
    transform: scale(1.0);
    opacity: 0;
  }
`;

const Spinner = styled.div`
  width: 100px;
  height: 100px;
  margin: 100px auto;
  background-color: #333;
  border-radius: 100%;
  animation: ${SkScaleout} 1s infinite ease-in-out;
`;

const Container = styled.div`
  position: fixed;
  top: 50px;
  left: 0px;
  z-index: 100;
  background-color: rgba(0, 0, 0, 0.5);
  height: 100%;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Loader = () => (
  <Container>
    <Spinner></Spinner>
  </Container>
);

export default Loader;
