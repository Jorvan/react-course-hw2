import React, { Component } from 'react';

import People from './components/People';
//import './data/people.js';

const data = [{
  id: 1,
  name: "Maria Montti",
  type: "model"
}, {
  id: 2,
  name: "Andreas Öhlund & Maria Therese",
  type: "photographer"
}, {
  id: 3,
  name: "Liu Liang",
  type: "model"
}, {
  id: 4,
  name: "Mostar Models",
  type: "model"
}, {
  id: 5,
  name: "Axel Lindahl",
  type: "photographer"
}, {
  id: 6,
  name: "Daniel Lindh",
  type: "photographer"
}, {
  id: 7,
  name: "Jadi",
  type: "model"
}, {
  id: 8,
  name: "Eric Broms",
  type: "photographer"
}, {
  id: 9,
  name: "Melodie Jeng",
  type: "model"
}, {
  id: 10,
  name: "Gustav Almestal",
  type: "photographer"
}, {
  id: 11,
  name: "Sara Ghofmann",
  type: "model"
}, {
  id: 12,
  name: "John Leah",
  type: "model"
}, {
  id: 13,
  name: "Anna Mailer",
  type: "model"
}, {
  id: 14,
  name: "Johan Sandberg",
  type: "photographer"
}, {
  id: 15,
  name: "Tomas Falmer",
  type: "photographer"
}, {
  id: 16,
  name: "Pal Allan",
  type: "photographer"
}];


class App extends Component {

  render() {

    return (
      <div>
      MODELs
      <People filter={"model"} data={data}/>
      PHOTOGRAPHERs
      <People filter={"photographer"} data={data}/>
      </div>
    );
  }
}

export default App;
