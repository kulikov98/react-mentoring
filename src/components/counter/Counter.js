import { Component, createElement } from "react";

export default class Counter extends Component {
  state = {
    count: +this.props.initialCount,
  };

  incrementCount = () => this.setState({ count: this.state.count + 1 });
  decrementCount = () => this.setState({ count: this.state.count - 1 });

  render() {
    return createElement("div", null, [
      "Counter: ",
      createElement("button", { onClick: () => this.incrementCount() }, "+"),
      createElement("span", null, this.state.count),
      createElement("button", { onClick: () => this.decrementCount() }, "-"),
    ]);
  }
}
