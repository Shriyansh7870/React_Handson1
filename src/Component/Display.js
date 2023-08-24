import { useState } from "react";
import { Component } from "react";
import Demo from "./Function";
import Demo1 from "./Class";
function Dispaly() {
  const [count, setCount] = useState(false);
  console.log(count);
  return (
    <div>
      <button className="btn1" onClick={() => setCount(!count)}>
        To see styling in functional component
      </button>
      {count ? <Demo /> : null}
    </div>
  );
}
export default Dispaly;

class Buttontwo extends Component {
  constructor() {
    super();
    this.state = {
      btnValue: true,
    };
    console.log(this.state.btnValue);
  }
  render() {
    return (
      <div>
        <button
          className="btn2"
          onClick={() => this.setState({ btnValue: !this.state.btnValue })}
        >
          To see styling in Class component
        </button>
        {this.state.btnValue ? null : <Demo1 />}
      </div>
    );
  }
}

export { Buttontwo };
