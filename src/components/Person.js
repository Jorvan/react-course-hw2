import React, {Component} from "react";
import PropTypes from 'prop-types';

class Person extends Component {

  render() {
    const {id, name, type } = this.props.info;

    return(
      <li id={id}>{name}-<small>{type}</small></li>
    );
  }
}


Person.propTypes = {
  info: PropTypes.object.isRequired
};

export default Person
