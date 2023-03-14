import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const Loading = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  min-height: 100vh;
`;

export const Container = styled.main`
  display: flex;
  max-height: 100vh;

  @media screen and (max-width: ${(props) => props.theme.breakpoints.md}) {
    flex-direction: column;
  }
`;

export const SideBar = styled.aside`
  background-color: ${(props) => props.theme.colors.background};
  min-width: 8rem;
  max-height: 100vh;
  overflow-y: hidden;
  /* justify-content: center;
  display: flex; */
`;

export const Back = styled(Link)`
  display: block;
  padding: 12px 15px;
  text-decoration: none;
`;

export const SectionData = styled.div``;

export const Main = styled.section`
  background-color: ${(props) => props.theme.colors.container};
  flex: 1;
  height: 100vh;
  overflow-y: hidden;
  padding: 40px;

  @media screen and (max-width: ${(props) => props.theme.breakpoints.md}) {
    height: 100%;
  }

  @media screen and (max-width: ${(props) => props.theme.breakpoints.sm}) {
    padding: 40px 20px;
  }
`;
