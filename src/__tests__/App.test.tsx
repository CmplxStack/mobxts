// import React from "react";
// import App from "@Views/App";
// import { mount } from "enzyme";
// import { Provider } from "mobx-react";
import { CounterStore } from "@Stores/Counter";

describe("test store",()=>{
  test('store has initial stae', () => {
    const initialState = {
        count:1,
        taco:"yes"
    };
    const countStore = CounterStore.create(initialState);

    expect(countStore.count).toEqual(1);
  })});