import React, { useState } from 'react';
import Profile from './Profile';
import Filter from './Filter';
import Repositories from './Repositories';

import { Container, SideBar, Main } from './styles';

import { getLangsFrom } from '../../services/api';

const RepositoriesPage = () => {
  const [currentLanguage, setCurrentLanguage] = useState();

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
      id: 1,
      name: 'Repo 1',
      description: 'descricao',
      html_url: 'https://devsamurai.com',
      language: 'Javascript',
    },
    {
      id: 2,
      name: 'Repo 2',
      description: 'descricao',
      html_url: 'https://devsamurai.com',
      language: 'PHP',
    },
    {
      id: 3,
      name: 'Repo 3',
      description: 'descricao',
      html_url: 'https://devsamurai.com',
      language: 'Html',
    },
    {
      id: 4,
      name: 'Repo 4',
      description: 'descricao',
      html_url: 'https://devsamurai.com',
      language: 'Typescript',
    },
    {
      id: 5,
      name: 'Repo 5',
      description: 'descricao',
      html_url: 'https://devsamurai.com',
      language: 'ruby',
    },
    {
      id: 6,
      name: 'Repo 6',
      description: 'descricao',
      html_url: 'https://devsamurai.com',
      language: 'Typescript',
    },
  ];

  const languages = getLangsFrom(repositories);

  const onFilterClick = (language) => {
    setCurrentLanguage(language);
  };

  return (
    <Container>
      <SideBar>
        <Profile user={user} />
        <Filter
          languages={languages}
          currentLanguage={currentLanguage}
          onClick={onFilterClick}
        />
      </SideBar>
      <Main>
        <Repositories
          repositories={repositories}
          currentLanguage={currentLanguage}
        />
      </Main>
    </Container>
  );
};
export default RepositoriesPage;
