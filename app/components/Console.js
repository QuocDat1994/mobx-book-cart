import React from "react";
import { inject, observer } from "mobx-react";

@inject(store => ({
  logStore: store.logStore
}))
@observer
export default class Console extends React.Component {
  render() {
    const { logStore } = this.props;

    return (
      <textarea
        className="console"
        value={logStore.message ? logStore.message.join("\n") : ""}
        disabled
      ></textarea>
    );
  }
}
