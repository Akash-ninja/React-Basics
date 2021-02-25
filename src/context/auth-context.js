import React from 'react';

const authContext = React.createContext({
    // initialization
    authenticated: false,
    login: () => {}
});

export default authContext;

/* Notes:

Context object is a globally available JS object - Technically. it doesn't have to be an object. It could be an array a string, a number etc as context value

Context object can be passed between React components without using props.

For Class based component - 
 to consume Context api - 
    1. static contextType = AuthContext; 
    2. for accessing anywhere in that file, this.context.property

For Functional based component -
    to consume Context api - 
    1. const var_name = useContext(AuthContext); 
    2. for accessing anywhere in that file, var_name.property

For creating/providing context api to wrap any component so that it can pass through component tree
    <AuthContext.Provider value={{ properties...... }}> is used

and for consuming Context API in any component for both Class and Functional based components -

    <AuthContext.Consumer> {context => {JSX code}}; </A.C>
*/