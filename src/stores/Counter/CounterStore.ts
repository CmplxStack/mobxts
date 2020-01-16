import { types, Instance, ModelInstanceTypeProps } from "mobx-state-tree";

const CounterModel = types.model({
  count: types.optional(types.number, 0),
  taco: types.optional(types.string, ""),
});

type CounterModelType = Instance<typeof CounterModel>;
type CounterModelProps = typeof CounterModel.properties;

export const CounterStore = types
  .model("CounterStore", CounterModel.properties)
  .views((self: ModelInstanceTypeProps<CounterModelProps>) => ({
    getCount(): CounterModelType["count"] {
      return self.count;
    },
    getTaco(): CounterModelType["taco"] {
      return self.taco;
    },
  }))
  .actions((self: ModelInstanceTypeProps<CounterModelProps>) => ({
    addOne(): void {
      self.count++;
    },
    subtractOne(): void {
      self.count--;
    },
  }));

export type CounterStoreType = typeof CounterStore.Type;
