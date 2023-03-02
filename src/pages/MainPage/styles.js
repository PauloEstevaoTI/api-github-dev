import { Link } from 'react-router-dom';
import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  text-align: center;
  min-height: 100vh;
  padding: 0 2rem;
`;

export const Logo = styled.img`
  width: 130px;
`;

export const Title = styled.h1`
  font-size: 2.2rem;
  color: ${(props) => props.theme.colors.text};
`;

export const Form = styled.form`
  display: flex;
  max-width: 583px;
  width: 100%;
`;

export const Input = styled.input`
  padding: 0px 24px;
  background-color: rgba(0, 0, 0, 0.8);
  height: 64px;
  line-height: 64px;
  border: none;
  font-size: 24px;
  flex: 1;

  &::placeholder {
    color: ${(props) => props.theme.colors.metalDark};
  }
`;

export const Button = styled(Link)`
  border: 3px solid ${(props) => props.theme.colors.text};
  height: 52px;
  width: 52px;
  margin-left: 20px;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: transparent;
  width: 80px;
  height: 64px;
  transition: 0.3s;

  &:hover {
    background-color: ${(props) => props.theme.colors.container};
  }
`;
