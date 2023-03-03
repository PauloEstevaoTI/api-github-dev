import React, { useState } from 'react';
import Profile from './Profile';

import { Container, SideBar, Main, ListSkills } from './styles';

const RepositoriesPage = () => {
  const [user] = useState('testando');
  const [linguages] = useState([
    { id: 1, linguagem: 'Javascript', qtd: 5 },
    { id: 2, linguagem: 'C', qtd: 2 },
    { id: 3, linguagem: 'Python', qtd: 4 },
    { id: 4, linguagem: 'React JS', qtd: 8 },
    { id: 5, linguagem: 'React Native', qtd: 3 },
  ]);

  return (
    <Container>
      <SideBar>
        <Profile />

        <ul>
          {linguages.map((item) => (
            <ListSkills key={linguages.id}>
              {item.linguagem} <span>{item.qtd}</span>
            </ListSkills>
          ))}
        </ul>
        <span>Limpar</span>
      </SideBar>
      <Main>{user}</Main>
    </Container>
  );
};
export default RepositoriesPage;
