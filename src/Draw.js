import React from "react";
import SvgSketchCanvas from "react-sketch-canvas";
 
const styles = {
  border: "0.0625rem solid #9c9c9c",
  borderRadius: "0.25rem"
};
 
const Draw = class extends React.Component {
  constructor(props) {
    super(props);
 
    this.canvas = React.createRef();
  }
 
  render() {
    return (
      <div>
        <SvgSketchCanvas
          ref={this.canvas}
          strokeWidth={5}
          strokeColor="black"
        />
        <button
          onClick={() => {
            this.canvas.current
              .exportImage("png")
              .then(data => {
                console.log(data);
              })
              .catch(e => {
                console.log(e);
              });
          }}
        >
          Get Image
        </button>
      </div>
    );
  }
};

export default Draw;