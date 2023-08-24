import "./App.css";
import Dispaly, { Buttontwo } from "./Component/Display";
import Demo1 from "./Component/Class";
import Demo from "./Component/Function";
function App() {
  return (
    <div className="App">
      <Dispaly></Dispaly>
      {/* <Dispaly1></Dispaly1> */}
      <Buttontwo></Buttontwo>
      {/* <Demo1></Demo1>
      <Demo></Demo> */}
      <h1 className="fun">Styling using Functional Component</h1>
    </div>
  );
}

export default App;
