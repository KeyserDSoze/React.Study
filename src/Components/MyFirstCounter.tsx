import { useReducer } from "react"
import { CounterUpdate, Counting } from "../Models/Counting";

const initialState: Counting = { value: 0 }

function reducer(state: Counting, action: CounterUpdate) {
    state.value += action.nextValue;
    return { value: state.value } as Counting;
}

export const Counter = () => {
    const [state, dispatch] = useReducer(reducer, initialState);
    return (
        <div>
            <div>Count: {state.value}</div>
            <button onClick={() => dispatch({ nextValue: 10 })}>Increment by 10</button>
            <button onClick={() => dispatch({ nextValue: -10 })}>Decrement by 10</button>
        </div>
    );
}