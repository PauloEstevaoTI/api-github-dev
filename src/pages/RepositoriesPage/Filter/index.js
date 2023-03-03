import React from 'react';

import { Selector, Container, Cleaner } from './styles';

const Filter = () => {
  const linguages = [
    { id: 1, linguagem: 'Javascript', qtd: 5, color: '#FF0' },
    { id: 2, linguagem: 'C', qtd: 2, color: 'red' },
    { id: 3, linguagem: 'Python', qtd: 4, color: 'blue' },
    { id: 4, linguagem: 'React JS', qtd: 8, color: 'orange' },
    { id: 5, linguagem: 'React Native', qtd: 3, color: 'purple' },
  ];

  return (
    <Container>
      {linguages.map((item) => (
        <Selector key={item.linguagem.toLocaleLowerCase()} color={item.color}>
          <span>{item.linguagem}</span>
          <span>{item.qtd}</span>
        </Selector>
      ))}
      <Cleaner>Limpar</Cleaner>
    </Container>
    // <ul>
    //   {linguages.map((item) => (
    //     <ListSkills key={linguages.id}>
    //       {item.linguagem} <span>{item.qtd}</span>
    //     </ListSkills>
    //   ))}
    // </ul>
  );
};

export default Filter;
