import React, { useEffect, useRef, useContext } from "react";
import AuthContext from "../../context/auth-context";
import classes from "./Cockpit.module.css";

const Cockpit = (props) => {
  const toggleBtnRef = useRef(null);
  const AuthContextForHooks = useContext(AuthContext);

  useEffect(() => {
    console.log("[Cockpit.js] useEffect");
    // Http request...
    // setTimeout(() => {
    //   alert("Data saved to cloud!");
    // }, 1000);

    toggleBtnRef.current.click();

    return () => {
      //clearTimeout(timer);
      console.log("[Cockpit.js] Clean up work in useEffect!!");
    };
  }, []);

  useEffect(() => {
    console.log("[Cockpit.js] 2nd useEffect!");
    return () => {
      console.log("[Cockpit.js] Clean up work in 2nd useEffect!!");
    };
  });

  /* Pass an empty array to useEffect and it will act as componentDidMount */
  // useEffect(() => {
  //   console.log("[Cockpit.js] useEffect");
  //   // Http request...
  //   setTimeout(() => {
  //     alert("Data saved to cloud!");
  //   }, 1000);
  // }, []);

  let btnClass = "";
  if (props.showPerson) {
    btnClass = classes.Red;
  }

  const assignedClasses = [];
  if (props.personsLength <= 2) {
    assignedClasses.push(classes.red);
  }
  if (props.personsLength <= 1) {
    assignedClasses.push(classes.bold);
  }

  return (
    <div className={classes.Cockpit}>
      <h1> {props.appTitle} </h1>
      <p className={assignedClasses.join(" ")}> This is really working!</p>
      <button ref={toggleBtnRef} className={btnClass} onClick={props.clicked}>
        Toggle Persons
      </button>
      {/* <AuthContext.Consumer>
        {context => <button onClick={context.login}>Log In</button>}
      </AuthContext.Consumer> */}
      <button onClick={AuthContextForHooks.login}>Log In</button>
    </div>
  );
};

export default React.memo(Cockpit);
