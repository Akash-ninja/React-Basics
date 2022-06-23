import React, { Component } from "react";
import classes from "./App.module.css";
import Persons from "../components/Persons/Persons";
import Cockpit from "../components/Cockpit/Cockpit";
import Aux from "../hoc/ReactAux";
import withClass from "../hoc/withClass";
import AuthContext from "../context/auth-context";

class App extends Component {
  constructor(props) {
    super(props);
    console.log("[App.js] constructor");
  }

  state = {
    persons: [
      { id: "a2bc", name: "Max", age: 28 },
      { id: "zx3c", name: "Manu", age: 29 },
      { id: "pqr4", name: "Stephanie", age: 26 },
    ],
    otherState: "Some other value",
    showPerson: false,
    showCockpit: true,
    changeCounter: 0,
    authenticated: false,
  };

  static getDerivedStateFromProps(props, state) {
    console.log("[App.js] getDerivedStateFromProps", props);
    return state;
  }

  componentDidMount() {
    console.log("[App.js] componentDidMount");
  }

  shouldComponentUpdate(nextProps, nextState) {
    console.log("[App.js] shouldComponentUpdate");
    return true;
  }

  componentDidUpdate() {
    console.log("[App.js] componentDidUpdate");
  }

  switchNameHandler = (newName) => {
    this.setState({
      persons: [
        { name: newName, age: 28 },
        { name: "Manu", age: 29 },
        { name: "Stephanie", age: 40 },
      ],
    });
  };

  nameChangedHandler = (id, event) => {
    // personIndex is array index here
    const personIndex = this.state.persons.findIndex((p) => p.id === id);

    const person = { ...this.state.persons[personIndex] };
    person.name = event.target.value;

    const persons = [...this.state.persons];
    persons[personIndex] = person;

    this.setState((prevState, props) => {
      return {
        persons: persons,
        changeCounter: prevState.changeCounter + 1,
      };
    });
  };

  togglePersonHandler = () => {
    this.setState({
      showPerson: !this.state.showPerson,
    });
  };

  deletePersonHandler = (personIndex) => {
    const persons = [...this.state.persons];
    persons.splice(personIndex, 1);
    this.setState({ persons: persons });
  };

  loginHandler = () => {
    this.setState({
      authenticated: true,
    });
  };

  render() {
    console.log("[App.js] render");
    let person = null;

    if (this.state.showPerson) {
      person = (
        <div>
          <Persons
            persons={this.state.persons}
            clicked={this.deletePersonHandler}
            changed={this.nameChangedHandler}
          />
        </div>
      );
    }

    return (
      <React.Fragment>
        <Aux>
          <button
            onClick={() => {
              this.setState({ showCockpit: false });
            }}
          >
            Remove Cockpit
          </button>
          <AuthContext.Provider
            value={{
              authenticated: this.state.authenticated,
              login: this.loginHandler
            }}
          >
            {this.state.showCockpit ? (
              <Cockpit
                showPerson={this.state.showPerson}
                personsLength={this.state.persons.length}
                clicked={this.togglePersonHandler}
                appTitle={this.props.appTitle}
              />
            ) : null}
            {person}
          </AuthContext.Provider>
        </Aux>
      </React.Fragment>
    );
  }
}

export default withClass(App, classes.App);


// Notes:
/*
  1. Don't update the setState() like this - 

  this.setState({
      persons: persons,
      changeCounter: this.state.changeCounter + 1
  });
  -setState() is called synchronously here but its not guaranteed to execute and finish immediately therefore this state when used for state update is not guaranteed to be the latest/prev state you which you depend.

  Behind the scenes, setState() does not immediately trigger an update of the state of this component in a re-render cycle
  instead its basically scheduled by React and React will then perform the state update and the re-render when it has the available resources to do that.
  

*/
