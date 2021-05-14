import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

import Section from 'Components/Section';
import Loader from 'Components/Loader';

const Container = styled.div`
  padding: 0px 10px;
`;

const TVPresenter = ({ airingToday, topRated, popular, error, loading }) =>
  loading ? (
    <Loader></Loader>
  ) : (
    <Container>
      {airingToday && airingToday.length > 0 && (
        <Section title="Airing Today">
          {airingToday.map((tv) => tv.name)}
        </Section>
      )}
      {topRated && topRated.length > 0 && (
        <Section title="Top Rated">{topRated.map((tv) => tv.name)}</Section>
      )}
      {popular && popular.length > 0 && (
        <Section title="Popular">{popular.map((tv) => tv.name)}</Section>
      )}
    </Container>
  );

TVPresenter.propTypes = {
  airingToday: PropTypes.array,
  topRated: PropTypes.array,
  popular: PropTypes.array,
  error: PropTypes.string,
  loading: PropTypes.bool.isRequired,
};

export default TVPresenter;
