import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const Contents = styled.div`
  :not(:last-child) {
    margin-bottom: 20px;
  }
`;

const Youtube = styled.iframe`
  width: 40vw;
  height: 50vh;
`;

const VideoType = styled.span`
  display: block;
  font-size: 20px;
  margin-bottom: 20px;
`;

const Trailer = ({ video }) => (
  <Container>
    {video.map((elem) => (
      <Contents key={elem.id}>
        <VideoType>{elem.type}</VideoType>
        <Youtube
          title={elem.id}
          src={`https://www.youtube.com/embed/${elem.key}`}
        ></Youtube>
      </Contents>
    ))}
  </Container>
);

Trailer.propTypes = {
  video: PropTypes.array.isRequired,
};

export default Trailer;
