import React, { Component } from "react";
import PropTypes from "prop-types";
import withClass from "../../../hoc/withClass";
import Aux from "../../../hoc/Aux";
import classes from "./Person.module.css";
import AuthContext from "../../../context/auth-context";

class Person extends Component {
  /* if you want to do in JS way (works on entire DOM and not on the component) */
  // componentDidMount() {
  //   document.querySelector('input').focus();
  // }

  /* First way of using refs */
  // componentDidMount() {
  //   this.inputElement.focus();
  // }

  constructor(props) {
    super(props);
    this.inputElementRef = React.createRef();
  }

  // For class based, shorter syntax
  static contextType = AuthContext;

  componentDidMount() {
    this.inputElementRef.current.focus();
    console.log(this.context.authenticated);
  }

  render() {
    console.log("[Person.js] rendering");
    return (
      <Aux>
        {/* <AuthContext.Consumer>
          {(context) =>
            context.authenticated ? <p>Authenticated!</p> : <p> Please Login</p>
          }
        </AuthContext.Consumer> */}
        {this.context.authenticated ? <p>Authenticated!</p> : <p> Please Login</p>}
        <p onClick={this.props.click}>
          I'm {this.props.name} and I am {this.props.age} years old.
        </p>
        <p>{this.props.children}</p>
        <input
          // works in Class based component and not in Functional one
          // ref={(inputEl) => {this.inputElement = inputEl}}
          ref={this.inputElementRef}
          type="text"
          onChange={this.props.changed}
          value={this.props.name}
        />
      </Aux>
    );
  }
}

// Proptypes Works in Dev mode only
Person.propTypes = {
  click: PropTypes.func,
  name: PropTypes.string,
  age: PropTypes.number,
  changed: PropTypes.func,
};

export default withClass(Person, classes.Person);

// Notes:
/*
  1. If you want to get access to any HTML/JSX element (be it <p>/ input or whatever) use -> refs

  It can be used in 2 ways - first one commented above and second one is in use

  In functional component, useRef() works
*/
