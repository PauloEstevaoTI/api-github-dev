import React from 'react';

import { MdSearch } from 'react-icons/md';
import {
  Container,
  Logo,
  Title,
  InputSearch,
  ContainerInput,
  SearchIcon,
} from './styles';

import githubLogo from '../../assets/images/github-logo.svg';

function MainPage() {
  return (
    <Container>
      <Logo src={githubLogo} alt="API Github" />
      <Title>API Github </Title>
      <ContainerInput>
        <InputSearch placeholder="usuário" />
        <SearchIcon>
          <MdSearch size={40} />
        </SearchIcon>
      </ContainerInput>
    </Container>
  );
}

export default MainPage;
