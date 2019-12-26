import { hot } from "react-hot-loader/root";
import React, {
  ComponentType,
  ComponentProps,
  FunctionComponent,
  ProviderExoticComponent,
  FC,
  PureComponent,
} from "react";
import { observer, inject, IReactComponent, IWrappedComponent } from "mobx-react";
import { COUNTER_STORE, CounterStoreInstance } from "../../stores/CounterStore";
import { Button, TextField } from "@material-ui/core";
import { AddSubtract } from "./AddSubtract";
import { IRootStore, RootStore } from "@src";

// import { MobXProviderContext } from "mobx-react";

// function useStores() {
//   return React.useContext(MobXProviderContext);
// }

type InjectTypeWrap<T> = <U extends IReactComponent<T>>(
  component: U & IWrappedComponent<any>,
) => IReactComponent<U>;

type CounterComponentType = InjectTypeWrap<ICounterComponentProps>;

export type StoresType = ReturnType<typeof RootStore>;

export type Subtract<T, K> = Omit<T, keyof K>;
interface ICounterComponentProps {
  COUNTER_STORE: CounterStoreInstance;
}

type ICT<T> = <U extends keyof T>(
  ...strs: U[]
) => <Y extends Pick<T, U>>(component: IReactComponent<Y>) => IReactComponent;

type InjectedComponent<T> = T extends IReactComponent<infer P> & IWrappedComponent<any>
  ? IReactComponent<P & T>
  : never;

type InjectType<T> = ({ ...args }: IReactComponent<T>) => IReactComponent<any>;
type ICountType = InjectType<ICounterComponentProps>;

export const Counter = inject(COUNTER_STORE)(
  (observer as ICountType)((props) => {
    const {
      COUNTER_STORE: {
        numberCounter: { counterName },
      },
    } = props;
    return <div>{counterName}</div>;
  }),
);
