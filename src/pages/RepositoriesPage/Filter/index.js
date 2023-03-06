import React from 'react';
import PropTypes from 'prop-types';

import { Selector, Container, Cleaner } from './styles';

const Filter = ({ languages }) => (
  <Container>
    {languages.map((item) => (
      <Selector key={item.name.toLowerCase()} color={item.color}>
        <span>{item.name}</span>
        <span>{item.count}</span>
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

Filter.propTypes = {
  languages: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string.isRequired,
      count: PropTypes.number.isRequired,
      color: PropTypes.string,
    }).isRequired
  ).isRequired,
};

export default Filter;
