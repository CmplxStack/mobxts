import { hot } from "react-hot-loader/root";
import React from "react";
import { Button } from "@material-ui/core";
import { observer, useObserver } from "mobx-react-lite";
import { useMST } from "@src/stores";

// Using global hook alone
export const Counter = hot(
  observer(() => {
    const { COUNTER_STORE } = useMST();
    return (
      <div>
        <div>{COUNTER_STORE.numberCounter.counterName}</div>
        <div>{COUNTER_STORE.numberCounter.count}</div>
        <Button
          onClick={COUNTER_STORE.numberCounter.addOne}
          variant={"contained"}
          color="primary"
        >
          Add One
        </Button>
      </div>
    );
  }),
);

// Using custom hook for data mapping
function useUserData() {
  const { COUNTER_STORE } = useMST();
  return useObserver(() => ({ nc: COUNTER_STORE.numberCounter }));
}

export const Counter2 = hot(
  observer(() => {
    const { nc } = useUserData();
    return (
      <div>
        <div>{nc.counterName}</div>
        <div>{nc.count}</div>
        <Button onClick={nc.addOne} variant={"contained"} color="secondary">
          Add One
        </Button>
      </div>
    );
  }),
);
