import styled from 'styled-components';

export const Container = styled.div`
  display: grid;
  grid-template-columns: auto;
  gap: 0.2rem;
  margin: 1rem auto;
  padding-right: 2rem;

  @media screen and (max-width: ${(props) => props.theme.breakpoints.md}) {
    grid-template-columns: auto auto;
    gap: 0.8rem;
    padding: 0 1rem;
  }
`;

export const Selector = styled.button`
  display: flex;
  align-items: center;
  justify-content: space-between;
  background-color: ${(props) => props.theme.colors.container};
  color: ${(props) => props.color || props.theme.colors.text};
  width: 100%;
  min-height: 2rem;
  border: none;
  border-top-right-radius: 20px;
  border-bottom-right-radius: 20px;
  transition: background 0.3s, transform 0.3s;
  padding: 0 1rem;

  &:hover,
  &.selected {
    background-color: ${(props) => props.color || props.theme.colors.ligth};
    color: ${(props) =>
      props.color ? props.theme.colors.white : props.theme.colors.black};

    transform: translateX(5px) scale(1.02);
  }

  @media screen and (max-width: ${(props) => props.theme.breakpoints.md}) {
    border-radius: 20px;

    &:hover,
    &.selected {
      transform: translateX(0) scale(1.02);
    }
  }
`;

// export const ListSkills = styled.li`
//   width: 90%;

//   margin-bottom: 2px;

//   list-style: none;
//   padding: 2px 12px;
//   display: flex;
//   justify-content: space-between;
//   font-size: 1rem;
// `;

export const Cleaner = styled.button`
  background: transparent;
  color: ${(props) => props.color || props.theme.colors.text};
  border: none;
  text-align: left;
  padding: 1rem;

  &:hover {
    color: rgba(255, 255, 255, 0.5);
  }

  @media screen and (max-width: ${(props) => props.theme.breakpoints.md}) {
    text-align: center;
    padding: 0 1rem;
  }
`;
