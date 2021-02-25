import React, { PureComponent } from "react";
import Person from "./Person/Person";

class Persons extends PureComponent {
  /* NO STATE IN THIS CLASS THATS WHY NO USE OF IT */
  // static getDerivedStateFromProps(state, props) {
  //   console.log('[Persons.js] getDerivedStateFromProps');
  //   return state;
  // }

  /* WE CAN USE PURECOMPONENT IF WE HAVE TO CHECK ALL PROPS */
  // shouldComponentUpdate(nextProps, nextState) {
  //   console.log("[Persons.js] shouldComponentUpdate");
  //   if (
  //     nextProps.persons !== this.props.persons ||
  //     nextProps.clicked !== this.props.clicked ||
  //     nextProps.changed !== this.props.changed
  //   ) {
  //     return true;
  //   } else {
  //     return false;
  //   }
  // }

  getSnapshotBeforeUpdate(prevProps, prevState) {
    console.log("[Persons.js] getSnapshotBeforeUpdate");
    return { message: "Snapshot!" };
  }

  componentDidUpdate(prevProps, prevState, snapshot) {
    console.log("[Persons.js] componentDidUpdate");
    console.log(snapshot);
  }

  render() {
    console.log("[Persons.js] rendering");

    return this.props.persons.map((person, index) => (
      <Person
        key={person.id}
        name={person.name}
        age={person.age}
        click={this.props.clicked.bind(this, index)}
        changed={this.props.changed.bind(this, person.id)}
      />
    ));
  }
}

export default Persons;

// deletePersonHandler.bind(this, index)}
// nameChangedHandler.bind(this, person.id)}
