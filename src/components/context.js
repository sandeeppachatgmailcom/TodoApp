import React, { createContext, useState,} from "react";
import Weather from "./weatherApp";

export const userContext = createContext();

function Context() {
  const [temperature, setTemperature] = useState(0);

  return (
    <div>
    </div>
  );
}

export default Context;
