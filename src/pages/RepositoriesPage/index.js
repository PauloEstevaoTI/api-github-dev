import React, { useState } from 'react';
import Profile from './Profile';
import Filter from './Filter';

import { Container, SideBar, Main } from './styles';

const RepositoriesPage = () => {
  const [user] = useState('Main');

  return (
    <Container>
      <SideBar>
        <Profile />
        <Filter />
      </SideBar>
      <Main>{user}</Main>
    </Container>
  );
};
export default RepositoriesPage;
