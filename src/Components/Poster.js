import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

const Container = styled.div`
  display: flex;
  flex-direction: column;
  font-size: 12px;
`;

const Image = styled.div`
  height: 180px;
  background-image: url(${(props) => props.bgUrl});
  background-size: cover;
  background-position: center;
  border-radius: 5px;
  transition: opacity 0.3s ease-in-out;
`;

const Rating = styled.span`
  position: absolute;
  bottom: 5px;
  right: 5px;
  opacity: 0;
  transition: opacity 0.3s ease-in-out;
`;

const ImageContainer = styled.div`
  position: relative;
  margin-bottom: 5px;
  :hover {
    ${Image} {
      opacity: 0.3;
    }
    ${Rating} {
      opacity: 1;
    }
  }
`;

const Title = styled.span`
  margin-bottom: 5px;
`;

const Year = styled.span`
  font-size: 10px;
  color: rgba(255, 255, 255, 0.5);
`;

const Poster = ({ id, imageUrl, title, rating, year, isMovie = false }) => (
  <Link to={isMovie ? `/movie/${id}` : `/tv/${id}`}>
    <Container>
      <ImageContainer>
        <Image
          bgUrl={
            imageUrl
              ? `https://image.tmdb.org/t/p/w300${imageUrl}`
              : require(`../assets/noimage.png`).default
          }
        ></Image>
        <Rating>⭐{rating} / 10</Rating>
      </ImageContainer>
      <Title>
        {title.length > 17 ? `${title.substring(0, 17)}...` : title}
      </Title>
      <Year>{year}</Year>
    </Container>
  </Link>
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
