import React, { useContext, useState, useCallback, useEffect } from "react";
import GrantChild from "./page2GrantChild";
import { useNavigate } from "react-router-dom";
import { classContext } from "./page2Parent";

function Child(props) {
    const className = useContext(classContext);
    const [value, setValue] = useState(0);
    const [parent ,setParent] = useState(props.value)
    const navigate = useNavigate();

    // Use useCallback to memoize the increment function
    const increment = useCallback(() => {
        setValue((value) => value + 1);
    }, []);

    // useEffect to log a message whenever the increment function is recreated
    useEffect(() => {
        console.log("Increment function recreated!");
    }, [increment]);
    useEffect(()=>{
        setParent(props.value)
    },[props.value])
    const redirectto = (path) => {
        navigate('/' + path);
    };

    return (
        <div>
            <h2> Child </h2>
             <h5 className="text-info"> parent data {parent }</h5>
            <h1 className="text-light">{value}</h1>
            <button className="btn btn-primary" onClick={increment}>
                {" "}
                +{" "}
            </button>
            <button
                className={`btn ${className}`}
                onClick={() => {
                    redirectto("");
                }}
            >
                {" "}
                Home
            </button>
            <GrantChild value={parent} />
        </div>
    );
}

export default Child;
