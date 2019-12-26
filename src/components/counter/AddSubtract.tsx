import React, { PropsWithChildren } from "react";
// import { Button } from "@material-ui/core";

export class AddSubtract<T> extends React.Component<PropsWithChildren<T>> {
  render(): JSX.Element {
    return <div>{this.props.children}</div>;
  }
}
