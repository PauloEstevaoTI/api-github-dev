import React from 'react';
import Profile from './Profile';
import Filter from './Filter';
import Repositories from './Repositories';

import { Container, SideBar, Main } from './styles';

const RepositoriesPage = () => (
  <Container>
    <SideBar>
      <Profile />
      <Filter />
    </SideBar>
    <Main>
      <Repositories />
    </Main>
  </Container>
);
export default RepositoriesPage;
