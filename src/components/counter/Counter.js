import { Component, createElement } from "react";

export default class Counter extends Component {
  state = {
    count: +this.props.initialCount || 0,
  };

  incrementCount = () => this.setState({ count: this.state.count + 1 });
  decrementCount = () => this.setState({ count: this.state.count - 1 });

  render() {
    return createElement(
      "div",
      null,
      "Counter: ",
      createElement("button", { onClick: () => this.incrementCount() }, "+"),
      createElement("span", { "data-testid": "value" }, this.state.count),
      createElement("button", { onClick: () => this.decrementCount() }, "-")
    );
  }
}
