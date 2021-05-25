import React, { useState } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

import Trailer from './Trailer';
import Maker from './Maker';
import Series from './Series';

const TabContainer = styled.div``;

const TabList = styled.ul`
  display: flex;
`;

const TabItem = styled.li`
  width: 90px;
  height: 40px;
  display: flex;
  justify-content: center;
  align-items: center;
  border-top-left-radius: 30px;
  border-top-right-radius: 30px;
  font-weight: 700;
  background-color: #2c3e50;
  border: 2px solid #34495e;
  cursor: pointer;
  :hover {
    border-bottom: 2px solid white;
  }
  :nth-child(1) {
    border-bottom: 2px solid
      ${({ current }) => (current === 0 ? 'white' : 'transparent')};
  }
  :nth-child(2) {
    border-bottom: 2px solid
      ${({ current }) => (current === 1 ? 'white' : 'transparent')};
  }
  :nth-child(3) {
    border-bottom: 2px solid
      ${({ current }) => (current === 2 ? 'white' : 'transparent')};
  }
  transition: border-bottom 0.4s ease-in-out;
`;

const TabContent = styled.div`
  background-color: rgba(20, 20, 20, 0.8);
  border-top-right-radius: 10px;
  border-bottom-right-radius: 10px;
  border-bottom-left-radius: 10px;
  padding: 30px 30px;
  width: 100%;
  max-width: 800px;
  min-width: 400px;
`;

const Tabs = ({ result, isMovie }) => {
  const [currentPos, setCurrentPos] = useState(0);

  const arr = isMovie
    ? [
        <Trailer video={result.videos.results} />,
        <Maker company={result.production_companies} />,
      ]
    : [
        <Trailer video={result.videos.results} />,
        <Maker company={result.production_companies} />,
        <Series season={result.seasons} />,
      ];

  const handleClick = (index) => {
    setCurrentPos(index);
  };

  return (
    <TabContainer>
      <TabList>
        <TabItem current={currentPos} onClick={() => handleClick(0)}>
          Trailer
        </TabItem>
        <TabItem current={currentPos} onClick={() => handleClick(1)}>
          Maker
        </TabItem>
        {isMovie ? null : (
          <TabItem current={currentPos} onClick={() => handleClick(2)}>
            Series
          </TabItem>
        )}
      </TabList>
      <TabContent>{arr[currentPos]}</TabContent>
    </TabContainer>
  );
};

Tabs.propTypes = {
  result: PropTypes.object.isRequired,
  isMovie: PropTypes.bool.isRequired,
};

export default Tabs;
