import React, { useCallback, useRef } from "react";
import "./App.css";
import { useGoal } from "./hooks/useGoal";

function App() {
  const [goal, setGoal] = useGoal();
  const title = useRef<HTMLInputElement | null>(null);
  const totalPages = useRef<HTMLInputElement | null>(null);

  const addGoal = useCallback(() => {
    if (title.current && totalPages.current) {
      setGoal(title.current.value, Number(totalPages.current.value));
    }
  }, [title, totalPages, setGoal]);
  return (
    <div>
      <input type="text" ref={title}></input>
      <input type="number" ref={totalPages}></input>
      <button onClick={addGoal}>Add Goal</button>

      {goal && (
        <>
          <div>{goal.title}</div>
          <div>{goal.totalPages}</div>
        </>
      )}
    </div>
  );
}

export default App;
