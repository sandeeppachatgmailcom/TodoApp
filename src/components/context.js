import React, { createContext, useState } from "react";
import Weather from "./weatherApp";

export const UserContext = createContext();

function Context() {
  const [temperature, setTemperature] = useState(0);

  return (
    <div>
      <UserContext.Provider value={  {temperature, setTemperature}  }>
        <Weather />
      </UserContext.Provider>
    </div>
  );
}

export default Context;
