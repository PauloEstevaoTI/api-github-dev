import React from 'react';
import PropTypes from 'prop-types';
import { MdGroup, MdWork, MdLink, MdLocationCity } from 'react-icons/md';

import { Avatar, Container, Header, Name, Inner, Data, Login } from './styles';

const Profile = ({ user }) => (
  <Container>
    <Header>
      <Avatar src={user.avatar_url} />
      <Login>{user.login}</Login>
      <Name>{user.name}</Name>
    </Header>
    <Inner>
      <Data>
        <MdGroup size={20} />
        {user.following} <i>seguidores</i>&nbsp; &middot; {user.followers}{' '}
        &nbsp; <i>seguindo</i>
      </Data>
      {user.company && (
        <Data>
          <MdWork size={20} />
          {user.company}
        </Data>
      )}

      <Data>
        <MdLocationCity size={20} />
        {user.location}
      </Data>
      <Data>
        <MdLink size={20} />
        <a href={`\\${user.blog}`}>devsamurai.com.br</a>
      </Data>
    </Inner>
  </Container>
);

Profile.propTypes = {
  user: PropTypes.shape({
    login: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    avatar_url: PropTypes.string.isRequired,
    followers: PropTypes.number.isRequired,
    following: PropTypes.number.isRequired,
    company: PropTypes.string,
    blog: PropTypes.string.isRequired,
    location: PropTypes.string.isRequired,
  }).isRequired,
};

export default Profile;
