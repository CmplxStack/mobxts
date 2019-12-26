/* eslint-disable @typescript-eslint/explicit-function-return-type */
import {
  types,
  Instance,
  ModelInstanceTypeProps,
  SnapshotOut,
  SnapshotIn,
  getSnapshot,
} from "mobx-state-tree";

export const COUNTER_STORE = "COUNTER_STORE";

const CounterModelProperties = types.model({
  count: types.optional(types.number, 0),
  taco: types.optional(types.string, ""),
  someArray: types.optional(types.array(types.string), ["two", "three", "another"]),
  textFieldOne: types.optional(types.string, ""),
  textFieldTwo: types.optional(types.string, ""),
});

const CounterModelActions = CounterModelProperties.views((self) => ({
  getCount() {
    return self.count;
  },
  getTaco() {
    return self.taco;
  },
}))
  .views((self) => ({
    get moreThanThree() {
      return self.someArray.filter((item) => item.length > 3);
    },
  }))
  .views((self) => ({
    get moreThanThreeWithJoins() {
      return self.moreThanThree.join(",");
    },
  }))
  .views((self) => ({
    get textFieldOneHasError() {
      return !(self.textFieldOne.length > 4 ? false : true);
    },
  }))
  .views((self) => ({
    get textFieldTwoHasError() {
      return !(self.textFieldTwo.length > 7 ? false : true);
    },
  }))
  .views((self) => ({
    get textFieldsHaveError() {
      return self.textFieldOneHasError || self.textFieldTwoHasError;
    },
  }))
  .actions((self) => ({
    textFieldOnePropertySetter(value: string) {
      self.textFieldOne = value;
    },
    textFieldTwoPropertySetter(value: string) {
      self.textFieldTwo = value;
    },
    addOne(): void {
      self.count++;
    },
    subtractOne(): void {
      self.count--;
    },
    addToStringArray() {
      self.someArray.push("This String");
    },
  }));

const numberSpecific = types
  .model({ counterName: "Number Specific" })
  .actions((self) => ({
    updateCounterName(value: string) {
      self.counterName = value;
    },
  }));
const CounterModel = types.compose(CounterModelProperties, CounterModelActions);
const numberCounter = types.compose(
  CounterModelProperties,
  CounterModelActions,
  numberSpecific,
);

export const CounterStore = types.model(COUNTER_STORE, {
  allCounters: types.array(CounterModel),
  pokemonCounter: types.maybeNull(CounterModel),
  carCounter: types.optional(CounterModel, {}),
  numberCounter: types.optional(numberCounter, {}),
});

export type CounterStoreInstance = Instance<typeof CounterStore>;

export type CounterStoreSnapshotIn = SnapshotIn<typeof CounterStore>;

export type CounterStoreSnapshotOut = SnapshotOut<typeof CounterStore>;

// const testPayload: CounterStoreSnapshotIn = {
//   allCounters: [{ count: 5 }],
// };
// const newz = CounterStore.create({ ...testPayload });

// const newzSnapOut = getSnapshot(newz);
// console.log(newzSnapOut);
