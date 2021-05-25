import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

import NoImageUrl from 'assets/noimage.png';

const Container = styled.div``;

const Grid = styled.div`
  margin-top: 25px;
  display: grid;
  grid-template-columns: repeat(auto-fill, 125px);
  grid-gap: 25px;
  align-items: end;
  justify-content: center;
`;

const Content = styled.div``;

const Image = styled.img`
  width: 125px;
  margin-bottom: 10px;
`;

const Series = ({ season }) => (
  <Container>
    <Grid>
      {season.map((elem) => (
        <Content key={elem.id}>
          <Image
            src={
              elem.poster_path
                ? `https://image.tmdb.org/t/p/w300${elem.poster_path}`
                : `${NoImageUrl}`
            }
          ></Image>
          <h3>{elem.air_date}</h3>
          <h3>{elem.name}</h3>
        </Content>
      ))}
    </Grid>
  </Container>
);

Series.propTypes = {
  season: PropTypes.array.isRequired,
};

export default Series;
