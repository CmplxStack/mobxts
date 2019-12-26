import React, { PropsWithChildren } from "react";

export class AddSubtract<T> extends React.Component<PropsWithChildren<T>> {
  render(): JSX.Element {
    return <div>{this.props.children}</div>;
  }
}
