import "./style.css";
import { Component } from "react";
class Demo1 extends Component {
  render() {
    return (
      <div className="Div1">
        <h1>This is created using Class Component</h1>
        <p>This is done using external CSS</p>
        <p style={{ color: "yellow", fontSize: "20px" }}>
          This is done using inline CSS
        </p>
      </div>
    );
  }
}
export default Demo1;
