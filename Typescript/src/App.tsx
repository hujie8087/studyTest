import React, { useState } from "react";
// import TodoList from './components/TodoList';
// import Snack from "./snack";
import { Provider } from "react-redux";
import { store } from "./redux/store";
import Counter from "./counter";

function App() {
  const [value, setValue] = useState(store.getState());
  store.subscribe(() => setValue(store.getState()));

  return (
    <Provider store={store}>
      <div className='App'>
        {/* <TodoList /> */}
        {/* <Snack></Snack> */}
        <Counter
          value={value}
          onIncrement={() => {
            store.dispatch({ type: "INCREASE" });
          }}
          onDecrement={() => {
            store.dispatch({ type: "DECREASE" });
          }}
        ></Counter>
      </div>
    </Provider>
  );
}

export default App;
