import React from 'react'
import PropTypes from 'prop-types'

const Greetings = (props) =>
  (
    <h1>{props.text}</h1>
  );

Greetings.propTypes = {
  text: PropTypes.string.isRequired
};

export default Greetings
