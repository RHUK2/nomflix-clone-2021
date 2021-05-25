import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

const Container = styled.div``;

const Contents = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  :not(:last-child) {
    margin-bottom: 20px;
  }
`;

const Youtube = styled.iframe`
  width: 100%;
  height: 320px;
`;

const VideoType = styled.span`
  display: block;
  font-size: 20px;
  margin-bottom: 20px;
`;

const Trailer = ({ video }) => (
  <Container>
    {video.length > 0
      ? video.map((elem) => (
          <Contents key={elem.id}>
            <VideoType>{elem.type}</VideoType>
            <Youtube
              title={elem.id}
              src={`https://www.youtube.com/embed/${elem.key}`}
            ></Youtube>
          </Contents>
        ))
      : 'No Video Info. :('}
  </Container>
);

Trailer.propTypes = {
  video: PropTypes.array.isRequired,
};

export default Trailer;
