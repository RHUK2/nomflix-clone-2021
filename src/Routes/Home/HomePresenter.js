import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

import Section from 'Components/Section';
import Loader from 'Components/Loader';

const Container = styled.div`
  padding: 0px 10px;
`;

const HomePresenter = ({ nowPlaying, upcoming, popular, error, loading }) =>
  loading ? (
    <Loader></Loader>
  ) : (
    <Container>
      {nowPlaying && nowPlaying.length > 0 && (
        <Section title="Now Playing">
          {nowPlaying.map((movie) => movie.title)}
        </Section>
      )}
      {upcoming && upcoming.length > 0 && (
        <Section title="upcoming">
          {upcoming.map((movie) => movie.title)}
        </Section>
      )}
      {popular && popular.length > 0 && (
        <Section title="popular">{popular.map((movie) => movie.title)}</Section>
      )}
    </Container>
  );

HomePresenter.propTypes = {
  nowPlaying: PropTypes.array,
  upcoming: PropTypes.array,
  popular: PropTypes.array,
  error: PropTypes.string,
  loading: PropTypes.bool.isRequired,
};

export default HomePresenter;
