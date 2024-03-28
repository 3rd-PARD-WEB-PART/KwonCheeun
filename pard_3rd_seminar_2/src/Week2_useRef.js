import {useState, useRef} from "react";

function Week2_useRef(){
    const [state, setState] = useState(0);
    const ref = useRef(0);

    const increaseState = () => {
        setState(state + 1);
    };

    const increaseRef = () => {
        ref.current = ref.current + 1;
        console.log("ref", ref.current);
    };
    return(
        <div>
            <p>state: {state}</p>
            <p>ref: </p>
            <button onClick={increaseState}>State up!</button>
            <button onClick={increaseRef}>Ref up!</button>
        </div>
    )
}

export default Week2_useRef;