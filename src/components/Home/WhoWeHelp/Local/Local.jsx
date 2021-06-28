import React, { Component } from "react";

class Local extends Component {
  constructor() {
    super();
    this.state = {
      name: "React"
    };
  }

  render() {
    return <div>This is Local component</div>;
  }
}

export default Local;