import React from 'react';
import PropTypes from 'prop-types';

import { Selector, Container, Cleaner } from './styles';

const Filter = ({ languages, currentLanguage, onClick }) => (
  <Container>
    {languages.map((item) => (
      <Selector
        key={item.name.toLowerCase()}
        color={item.color}
        className={currentLanguage === item.name ? 'selected' : ''}
        onClick={() => onClick && onClick(item.name)}
      >
        <span>{item.name}</span>
        <span>{item.count}</span>
      </Selector>
    ))}
    <Cleaner onClick={() => onClick && onClick(undefined)}>Limpar</Cleaner>
  </Container>
);

Filter.defaultProps = {
  currentLanguage: null,
  onClick: null,
};

Filter.propTypes = {
  languages: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string.isRequired,
      count: PropTypes.number.isRequired,
      color: PropTypes.string,
    }).isRequired
  ).isRequired,
  currentLanguage: PropTypes.string,
  onClick: PropTypes.func,
};

export default Filter;
