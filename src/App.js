import { useState } from "react";
import Timer from "./components/Timer";
import Title from "./components/Title";
import TimeList from "./components/TimeList";
import { context } from "./components/Context";

function App() {
  const [times, setTimes] = useState([]);
  return (
    <div>
      <context.Provider value={{ setTimes, times }}>
        <Title/>
        <Timer/>
        <TimeList/>
      </context.Provider>
    </div>
  );
}

export default App;
