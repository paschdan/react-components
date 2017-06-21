import React from 'react'
import PropTypes from 'prop-types'

const Greetings = (props) =>
  (
    <h1>{props.greetWord} {props.greetTo}</h1>
  );

Greetings.propTypes = {
  greetWord: PropTypes.string.isRequired,
  greetTo: PropTypes.string.isRequired
};

export default Greetings
