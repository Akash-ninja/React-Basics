import React, { useContext } from "react";
import { ChannelContext, UserContext } from "./ProviderComponent";

// Consumer component for Context API
function ComponentC() {
  const user = useContext(UserContext);
  const channel = useContext(ChannelContext);

  return (
    <div className="App">
      {user} - {channel}
    </div>
  );
}

export default ComponentC;
