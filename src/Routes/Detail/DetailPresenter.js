import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import Helmet from 'react-helmet';
import { withRouter } from 'react-router';

import Loader from 'Components/Loader';
import Tabs from 'Components/Tabs';

const Container = styled.div`
  min-height: 100%;
  position: relative;
  padding: 50px;
`;

const BackDrop = styled.div`
  position: fixed;
  top: 50px;
  left: 0px;
  width: 100%;
  height: 100%;
  background-image: url(${(props) => props.bgUrl});
  background-size: cover;
  background-position: center;
  filter: blur(3px);
  opacity: 0.5;
`;

const Content = styled.div`
  display: flex;
  z-index: 1;
  position: relative;
  height: 100%;
`;

const Cover = styled.div`
  background-image: url(${(props) => props.bgUrl});
  background-size: cover;
  border: 1px solid white;
  background-position: center;
  width: 30%;
  height: 80vh;
  border-radius: 5px;
`;

const Data = styled.div`
  width: 70%;
  padding: 0px 30px;
`;

const Title = styled.h3`
  font-size: 32px;
  margin-bottom: 10px;
`;

const ItemContainer = styled.div`
  display: flex;
  margin-bottom: 10px;
  align-items: center;
`;

const Divider = styled.span`
  margin: 0px 10px;
`;

const Item = styled.span`
  display: block;
`;

const Overview = styled.p`
  font-size: 12px;
  line-height: 1.5;
  width: 50%;
  margin-bottom: 30px;
`;

const Icon = styled.i`
  font-size: 20px;
  color: #f1c40f;
`;

const DetailPresenter = withRouter(({ result, error, loading, isMovie }) => (
  <>
    <Helmet>
      <title>
        {!loading &&
          (result.original_title
            ? result.original_title
            : result.original_name)}
      </title>
    </Helmet>
    {loading ? (
      <Loader />
    ) : (
      <Container>
        <BackDrop
          bgUrl={
            result.backdrop_path
              ? `https://image.tmdb.org/t/p/original${result.backdrop_path}`
              : null
          }
        ></BackDrop>
        <Content>
          <Cover
            bgUrl={
              result.poster_path
                ? `https://image.tmdb.org/t/p/w500${result.poster_path}`
                : require(`../../assets/noimage.png`).default
            }
          ></Cover>
          <Data>
            <Title>
              {result.original_title
                ? result.original_title
                : result.original_name}
            </Title>
            <ItemContainer>
              <Item>
                {result.release_date
                  ? result.release_date.substring(0, 4)
                  : result.first_air_date.substring(0, 4)}
              </Item>
              <Divider>•</Divider>
              <Item>
                {result.runtime ? result.runtime : result.episode_run_time[0]}{' '}
                min
              </Item>
              <Divider>•</Divider>
              <Item>
                {' '}
                {result.genres &&
                  result.genres.map((genre, index) =>
                    index === result.genres.length - 1
                      ? genre.name
                      : `${genre.name} / `,
                  )}
              </Item>
              {isMovie ? (
                <>
                  <Divider>•</Divider>
                  <Item>
                    <a
                      href={`https://www.imdb.com/title/${result.imdb_id}`}
                      target="_blank"
                      rel="noreferrer"
                    >
                      <Icon className="fab fa-imdb"></Icon>
                    </a>
                  </Item>
                </>
              ) : null}
            </ItemContainer>
            <Overview>{result.overview}</Overview>

            <Tabs result={result} isMovie={isMovie} />
          </Data>
        </Content>
      </Container>
    )}
  </>
));

DetailPresenter.propTypes = {
  result: PropTypes.object,
  error: PropTypes.string,
  loading: PropTypes.bool.isRequired,
  isMovie: PropTypes.bool.isRequired,
};

export default DetailPresenter;
