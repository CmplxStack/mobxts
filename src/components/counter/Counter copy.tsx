import { hot } from "react-hot-loader/root";
import React, {
  ComponentType,
  ComponentProps,
  FunctionComponent,
  ProviderExoticComponent,
  FC,
  PureComponent,
} from "react";
import { observer as og, inject, IReactComponent, IWrappedComponent } from "mobx-react";
import { observer } from "mobx-react-lite";
import { COUNTER_STORE, CounterStoreInstance } from "../../stores/CounterStore";
import { Button, TextField } from "@material-ui/core";
import { AddSubtract } from "./AddSubtract";
import { IRootStore } from "@src";

// import { MobXProviderContext } from "mobx-react";

// function useStores() {
//   return React.useContext(MobXProviderContext);
// }

interface ICounterComponentProps {
  COUNTER_STORE: CounterStoreInstance;
}
export type StoresType = ReturnType<IRootStore>;
export type Subtract<T, K> = Omit<T, keyof K>;

export const withStores = <TStoreProps extends keyof StoresType>(
  ...stores: TStoreProps[]
) => <TProps extends Pick<StoresType, TStoreProps>>(
  component: React.ComponentType<TProps>,
) => {
  return (inject(...[COUNTER_STORE])(component) as any) as React.FC<
    Subtract<TProps, Pick<StoresType, TStoreProps>> &
      Partial<Pick<StoresType, TStoreProps>>
  > &
    IWrappedComponent<TProps>;
};
type ICounterType = IReactComponent<Partial<ICounterComponentProps>>;
// type ICountT = IReactComponent<ICounterComponentProps> extends JSX.;

// type Omit<T, K extends keyof T> = Pick<T, Exclude<keyof T, K>>;
export const Counter = withStores(COUNTER_STORE)(
  og<IReactComponent<ICounterComponentProps>>((props) => {
    const {
      numberCounter: {
        addOne,
        subtractOne,
        addToStringArray,
        count,
        counterName,
        textFieldOne,
        textFieldOneHasError,
        textFieldTwo,
        textFieldOnePropertySetter,
        textFieldTwoHasError,
        textFieldTwoPropertySetter,
        textFieldsHaveError,
      },
    } = props.COUNTER_STORE!;
    return (
      <div>
        {counterName}
        <br />
        {count}
        <br />
        <TextField
          value={textFieldOne}
          onChange={(e) => textFieldOnePropertySetter(e.target.value)}
          error={textFieldOneHasError}
          variant={"outlined"}
        />
        <TextField
          value={textFieldTwo}
          onChange={(e) => textFieldTwoPropertySetter(e.target.value)}
          error={textFieldTwoHasError}
          variant={"outlined"}
        />
        <AddSubtract>
          <Button disabled={textFieldsHaveError} onClick={addOne} color="primary">
            Add One?
          </Button>
          <Button onClick={subtractOne} color="primary">
            Subtract One
          </Button>
          <Button onClick={addToStringArray} color="primary">
            Add Static Value
          </Button>
        </AddSubtract>
      </div>
    );
  }),
);

// export const Counter = inject(COUNTER_STORE)(
//   og<ICounterType>((props) => {
//     const {
//       numberCounter: {
//         addOne,
//         subtractOne,
//         addToStringArray,
//         count,
//         counterName,
//         textFieldOne,
//         textFieldOneHasError,
//         textFieldTwo,
//         textFieldOnePropertySetter,
//         textFieldTwoHasError,
//         textFieldTwoPropertySetter,
//         textFieldsHaveError,
//       },
//     } = props.COUNTER_STORE!;
//     return (
//       <div>
//         {counterName}
//         <br />
//         {count}
//         <br />
//         <TextField
//           value={textFieldOne}
//           onChange={(e) => textFieldOnePropertySetter(e.target.value)}
//           error={textFieldOneHasError}
//           variant={"outlined"}
//         />
//         <TextField
//           value={textFieldTwo}
//           onChange={(e) => textFieldTwoPropertySetter(e.target.value)}
//           error={textFieldTwoHasError}
//           variant={"outlined"}
//         />
//         <AddSubtract>
//           <Button disabled={textFieldsHaveError} onClick={addOne} color="primary">
//             Add One?
//           </Button>
//           <Button onClick={subtractOne} color="primary">
//             Subtract One
//           </Button>
//           <Button onClick={addToStringArray} color="primary">
//             Add Static Value
//           </Button>
//         </AddSubtract>
//       </div>
//     );
//   }),
// );

// export const Counter = (inject(COUNTER_STORE) as ({
//   ...args
// }: IReactComponent<ICounterComponentProps>) => IReactComponent<any>)(
//   // }: any) => ({ ...args2 }: any) => any)(
//   og((props) => {
//     const {
//       COUNTER_STORE: {
//         numberCounter: { counterName },
//       },
//     } = props!;
//     return (
//       <div>
//         {counterName}
//         {/* <br />
//         {count}
//         <br />
//         <TextField
//           value={textFieldOne}
//           onChange={(e) => textFieldOnePropertySetter(e.target.value)}
//           error={textFieldOneHasError}
//           variant={"outlined"}
//         />
//         <TextField
//           value={textFieldTwo}
//           onChange={(e) => textFieldTwoPropertySetter(e.target.value)}
//           error={textFieldTwoHasError}
//           variant={"outlined"}
//         />
//         <AddSubtract>
//           <Button disabled={textFieldsHaveError} onClick={addOne} color="primary">
//             Add One?
//           </Button>
//           <Button onClick={subtractOne} color="primary">
//             Subtract One
//           </Button>
//           <Button onClick={addToStringArray} color="primary">
//             Add Static Value
//           </Button>
//         </AddSubtract> */}
//       </div>
//     );
//   }),
// );

// type ICT<Y> = <U extends keyof Y>(component: IReactComponent<U>) => IReactComponent;

// type test = ICT<ICounterComponentProps>;
// type ICountT = React.FC<
//   Subtract<TProps, Pick<StoresType, TStoreProps>> & Partial<Pick<StoresType, TStoreProps>>
// > &
//   IWrappedComponent<TProps>;

// type Omit<T, K extends keyof T> = Pick<T, Exclude<keyof T, K>>;
// export function inject(
//   ...stores: string[]
// ): <T extends IReactComponent<any>>(
//   target: T
// ) => T & (T extends IReactComponent<infer P> ? IWrappedComponent<P> : never)
// export type StoresType = ReturnType<typeof bootstrap>;

// declare module "mobx-react" {
//   export function inject<D extends object>(
//     mapStoreToProps: (store: IRootStore) => D
//   ): <A extends D>(
//     component: React.ComponentType<A> | React.SFC<A>
//   ) => React.SFC<Omit<A, keyof D> & Partial<D>> & IWrappedComponent<A>;

// export const withStores = <TStoreProps extends keyof StoresType>(
//   ...stores: TStoreProps[]
// ) => <TProps extends Pick<StoresType, TStoreProps>>(
//   component: React.ComponentType<TProps>,
// ) => {
//   return (inject(...stores)(component) as any) as React.FC<
//     Subtract<TProps, Pick<StoresType, TStoreProps>> &
//       Partial<Pick<StoresType, TStoreProps>>
//   > &
//     IWrappedComponent<TProps>;
// };
// type ICountT = React.FC<
//   Subtract<TProps, Pick<StoresType, TStoreProps>> & Partial<Pick<StoresType, TStoreProps>>
// > &
//   IWrappedComponent<TProps>;

// (IReactComponent<T> & IWrappedComponent<T> & JSX.Element;
//  React.SFC<Omit<ICounterComponentProps, keyof StoresType> & Partial<StoresType>> &
//   IWrappedComponent<ICounterComponentProps>;
