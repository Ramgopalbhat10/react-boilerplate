import React, { Component } from "react";
import propTypes from "prop-types";

export default class DefaultErrorBoundary extends Component {
  state = {
    isError: false
  };

  static propTypes = {
    children: propTypes.node.isRequired
  };

  static getDerivedStateFromError() {
    return { isError: true };
  }

  render() {
    const { isError } = this.state;
    const { children } = this.props;
    return isError ? <div>Something went wrong!</div> : children;
  }
}
