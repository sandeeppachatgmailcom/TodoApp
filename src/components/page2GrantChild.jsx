import React, { useEffect, useContext, useRef, useState, memo } from "react";
import { classContext } from "./page2Parent";

function GrantChild(props) {
  const [min, setMin] = useState(props.value);
  console.log(props.value,'min')
  useEffect(() => {
    setMin(props.value);
  }, [props.value]);

  const classname = useContext(classContext);
  const [state, setState] = useState(classname);
  const h5Tag = useRef();

  return (
    <div>
      <h3 className="text-light">{min}</h3>
      <h1 className={`${state}`}>GrantChild</h1>
      <h1 className={`${state}`}>{min}</h1>

      <h5 ref={h5Tag} className={`${state}`}>
        temp
      </h5>
      <button
        onClick={() => {
          h5Tag.current.className === "bg-dark"
            ? (h5Tag.current.className = "bg-danger")
            : (h5Tag.current.className = "bg-dark");
        }}
        className="btn btn-danger"
      >
        useRefTest
      </button>
    </div>
  );
}

export default memo (GrantChild);
