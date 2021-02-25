import React from "react";

const withClass = (WrappedComponent, className) => {
  return (props) => (
    <div className={className}>
      <WrappedComponent {...props} />
    </div>
  );
};

export default withClass;

/*
<WrappedComponent props={props}/>
 We can't do like this Because React automatically takes all the attributes you add to your JSX code and combines them in a props object so now props would not replace the props object but be added as a single property in the props passed to the Wrapped Component.
*/
