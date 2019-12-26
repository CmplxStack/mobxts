import { useContext, createContext } from "react";
import { types, Instance, onSnapshot } from "mobx-state-tree";
import { CounterStore, COUNTER_STORE } from "~Stores/CounterStore";

const RootModel = types.model("ROOT_STORE", {
  [COUNTER_STORE]: CounterStore,
});

export const rootStore = RootModel.create({
  [COUNTER_STORE]: {},
});

onSnapshot(rootStore, (snapshot) => console.log("Snapshot: ", snapshot));

export type RootInstance = Instance<typeof RootModel>;
const RootStoreContext = createContext<null | RootInstance>(null);

export const Provider = RootStoreContext.Provider;
export function useMST() {
  const store = useContext(RootStoreContext);
  if (store === null) {
    throw new Error("Store cannot be null, please add a context provider");
  }
  return store as RootInstance;
}
