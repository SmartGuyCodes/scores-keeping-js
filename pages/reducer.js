import { useReducer } from "react";

export default function Reducer(){
    const [multiplication, dispatch] = useReducer((state, action) => {
        return state * action;
    }, 50);

    const [division, divide] = useReducer((state, action) => {
        return state / action;
    }, 1000);

    return (
        <div>
            <p>The multiplication result is {multiplication}</p>
            <button onClick={() => dispatch(2)}>Multiply by 2</button>

            <p>The division result is {division}</p>
            <button onClick={() => divide(2)}>Divide by 2</button>
        </div>
    );
}