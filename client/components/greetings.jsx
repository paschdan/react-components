import React from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'

export const Greetings = (props) =>
  (
    <h1>{props.greetWord} {props.greetTo}</h1>
  );

Greetings.propTypes = {
  greetWord: PropTypes.string.isRequired,
  greetTo: PropTypes.string.isRequired
};

const mapStateToProps = state => {
  return {
    greetTo: state.greetTo
  }
};

const GreetingsContainer = connect(mapStateToProps, null)(Greetings);

export default GreetingsContainer
