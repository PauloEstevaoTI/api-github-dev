import React from 'react';
import Profile from './Profile';
import Filter from './Filter';
import Repositories from './Repositories';

import { Container, SideBar, Main } from './styles';

import { getLangsFrom } from '../../services/api';

const user = {
  login: 'devSamurai',
  name: 'Paulo',
  avatar_url: 'https://avatars.githubusercontent.com/u/55540536?v=4',
  followers: 0,
  following: 0,
  company: 'teste',
  blog: 'https://devsamurai.com.br',
  location: 'São José dos Campos - SP',
};

const repositories = [
  {
    name: 'Repo 1',
    description: 'descricao',
    html_url: 'https://devsamurai.com',
    language: 'Javascript',
  },
  {
    name: 'Repo 2',
    description: 'descricao',
    html_url: 'https://devsamurai.com',
    language: 'PHP',
  },
  {
    name: 'Repo 3',
    description: 'descricao',
    html_url: 'https://devsamurai.com',
    language: 'Html',
  },
  {
    name: 'Repo 4',
    description: 'descricao',
    html_url: 'https://devsamurai.com',
    language: 'Typescript',
  },
  {
    name: 'Repo 5',
    description: 'descricao',
    html_url: 'https://devsamurai.com',
    language: 'ruby',
  },
  {
    name: 'Repo 6',
    description: 'descricao',
    html_url: 'https://devsamurai.com',
    language: 'Typescript',
  },
];

const languages = getLangsFrom(repositories);

const RepositoriesPage = () => (
  <Container>
    <SideBar>
      <Profile user={user} />
      <Filter languages={languages} />
    </SideBar>
    <Main>
      <Repositories />
    </Main>
  </Container>
);
export default RepositoriesPage;
