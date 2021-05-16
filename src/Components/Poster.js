import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

const Container = styled.div``;

const ImageContainer = styled.div`
  display: flex;
  flex-direction: column;
`;

const Image = styled.div``;

const Rating = styled.span``;

const Title = styled.span``;

const Year = styled.span``;

const Poster = ({ id, imageUrl, title, rating, year, isMovie = false }) => (
  <Container>
    <ImageContainer>
      <Image></Image>
      <Rating>{rating}</Rating>
      <Title>{title}</Title>
      <Year>{year}</Year>
    </ImageContainer>
  </Container>
);

Poster.propTypes = {
  id: PropTypes.number.isRequired,
  imageUrl: PropTypes.string,
  title: PropTypes.string.isRequired,
  rating: PropTypes.number,
  year: PropTypes.string,
  isMovie: PropTypes.bool,
};

export default Poster;
