import React, { useState } from 'react';

import { MdSearch } from 'react-icons/md';
import { Container, Logo, Title, Input, Form, Button } from './styles';

import githubLogo from '../../assets/images/github-logo.svg';

function MainPage() {
  const [login, setLogin] = useState('');

  return (
    <Container>
      <Logo src={githubLogo} alt="API Github" />
      <Title>API Github </Title>
      <Form>
        <Input
          placeholder="usuário"
          value={login}
          onChange={(e) => {
            setLogin(e.target.value);
          }}
        />
        <Button to={`/${login}/repositories`}>
          <MdSearch size={40} />
        </Button>
      </Form>
    </Container>
  );
}

export default MainPage;
