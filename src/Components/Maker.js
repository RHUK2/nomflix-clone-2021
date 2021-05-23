import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

const Container = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
`;

const Content = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  margin: 10px;
  padding: 20px;
  background-color: rgba(255, 255, 255, 0.2);
  border-radius: 5px;
`;

const Image = styled.img`
  width: 15vw;
  border-radius: 5px;
  margin-bottom: 20px;
`;

const Maker = ({ company }) => (
  <Container>
    {company.map((elem) => (
      <Content key={elem.id}>
        <Image
          src={
            elem.logo_path
              ? `https://image.tmdb.org/t/p/w300${elem.logo_path}`
              : null
          }
        ></Image>
        <span>{elem.name}</span>
      </Content>
    ))}
  </Container>
);

Maker.propTypes = {
  company: PropTypes.array.isRequired,
};

export default Maker;
