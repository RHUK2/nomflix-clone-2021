import React from 'react';
import { Link, withRouter } from 'react-router-dom';
import styled from 'styled-components';

import ThunderImgUrl from 'assets/Thunder.png';

const Header = styled.header`
  color: white;
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 50px;
  display: flex;
  align-items: center;
  background-color: rgba(25, 25, 25, 1);
  z-index: 10;
  box-shadow: 0px 1px 10px 2px rgba(0, 0, 0, 0.8);
`;

const List = styled.ul`
  display: flex;
`;

const Item = styled.li`
  width: 80px;
  height: 50px;
  display: flex;
  justify-content: center;
  align-items: center;
  :not(:first-child):hover {
    border-bottom: 4px solid #f1c40f;
  }
  border-bottom: 4px solid
    ${({ current }) => (current ? '#f1c40f' : 'transparent')};
  transition: border-bottom 0.4s ease-in-out;
`;

const SLink = styled(Link)`
  height: 50px;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const Logo = styled.img`
  width: 30px;
  height: 30px;
  position: relative;
  top: 4px;
`;

export default withRouter(({ location: { pathname } }) => (
  <Header>
    <List>
      <Item>
        <SLink to="/">
          <Logo src={`${ThunderImgUrl}`} alt=""></Logo>
        </SLink>
      </Item>
      <Item current={pathname === '/'}>
        <SLink to="/">HOME</SLink>
      </Item>
      <Item current={pathname === '/tv'}>
        <SLink to="/tv">TV</SLink>
      </Item>
      <Item current={pathname === '/search'}>
        <SLink to="/search">SEARCH</SLink>
      </Item>
    </List>
  </Header>
));
