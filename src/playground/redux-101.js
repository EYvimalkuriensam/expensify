import { createStore } from "redux";

// Action Generators
const incrementCount = ({ incrementBy = 1 } = {}) => ({
  type: "INCREMENT",
  incrementBy
});

const decrementCount = ({ decrementBy = 1 } = {}) => ({
  type: "DECREMENT",
  decrementBy
});

const resetCount = () => ({ type: "RESET" });

const setCount = ({ count }) => ({ type: "SET", count });

// Reducers
const countReducer = (
  state = { count: 0 },
  { type, incrementBy, decrementBy, count }
) => {
  switch (type) {
    case "INCREMENT":
      return { count: state.count + incrementBy };
    case "DECREMENT":
      return { count: state.count - decrementBy };
    case "RESET":
      return { count: 0 };
    case "SET":
      return { count };
    default:
      return state;
  }
};

const store = createStore(countReducer);

store.subscribe(() => console.log(store.getState()));

store.dispatch(incrementCount({ incrementBy: 5 }));
store.dispatch(incrementCount());

store.dispatch(decrementCount());

store.dispatch(resetCount());

store.dispatch(decrementCount({ decrementBy: 10 }));

store.dispatch(setCount({ count: 101 }));
