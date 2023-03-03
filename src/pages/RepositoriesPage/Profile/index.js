import React from 'react';

import { MdGroup, MdWork, MdLink, MdLocationCity } from 'react-icons/md';

import { Avatar, Container, Header, Name, Inner, Data } from './styles';

const Profile = () => (
  <Container>
    <Header>
      <Avatar src="https://avatars.githubusercontent.com/u/55540536?v=4" />
      <Name>Dev Samurai</Name>
    </Header>
    <Inner>
      <Data>
        <MdGroup size={20} />
        30 <i>seguidores</i>&nbsp; &middot; 10 &nbsp; <i>seguindo</i>
      </Data>
      <Data>
        <MdWork size={20} />
        Dev Samurai
      </Data>
      <Data>
        <MdLocationCity size={20} />
        São José dos Campos
      </Data>
      <Data>
        <MdLink size={20} />
        <a href="https://devsamurai.com.br">devsamurai.com.br</a>
      </Data>
    </Inner>
  </Container>
);

export default Profile;
