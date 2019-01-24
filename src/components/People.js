import React, {Component} from "react";

import Person from './Person'
import PropTypes from 'prop-types';

class People extends Component {

  render() {

    const  { data }   = this.props;
    const  { filter } = this.props;

    function PrintPerson(props){

      const filter = props.filter;

      if ( props.person.type === filter || filter === 'all') {
          return <Person info={props.person} key={props.person.id}/>
      }
      return <span></span>
    }

    return (

      <ul>
        { data.map (s=>
          <PrintPerson filter={filter} person={s} key={s.id}/>)}
      </ul>

    );
  }
}

People.propTypes = {
  data: PropTypes.array.isRequired,
  filter: PropTypes.string.isRequired
};

export default People
