import React from "react";
import App from "@Views/App";
import { mount } from "enzyme";
import { Provider } from "mobx-react";
import { CounterStore } from "@Stores/Counter";

const store = CounterStore.create();

describe('test app', () => {
  let fMount = mount(
  <Provider store={store}>
    <App/>
  </Provider>)
  it("tests a thing",()=>{
    expect(fMount.find({"data-testid":"test-counter"})).toExist()
  })
});

describe("test store",()=>{
  

})