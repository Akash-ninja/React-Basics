import React from "react";
import ComponentC from "./ComponentC";

// Creating context api
export const UserContext = React.createContext();
export const ChannelContext = React.createContext();

// Provider component
function ProviderComponent() {
  return (
    <div className="App">
      {/* Providing value to created context*/}
      <UserContext.Provider value={"Atmaran"}>
        <ChannelContext.Provider value={"Pandurang"}>
          <ComponentC />
        </ChannelContext.Provider>
      </UserContext.Provider>
    </div>
  );
}

export default ProviderComponent;
