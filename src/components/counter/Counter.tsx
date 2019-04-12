import React, { Component } from 'react';
import { hot } from 'react-hot-loader/root';
import { observer, inject } from 'mobx-react';
import { CounterStoreType } from '../../stores/CounterStore';
import { Button } from '@material-ui/core';
import AddSubtract from './AddSubtract';

// @inject('store')
// @observer
class Counter extends Component<{ store?: CounterStoreType }> {
  render(): JSX.Element {
    const { count, addOne, subtractOne } = this.props.store!;
    // const { addOne, subtractOne, count } = this.props.store;
    return (
      <div>
        {count}
        <AddSubtract>
          <Button onClick={addOne} color='primary'>
            Add One?
          </Button>
          <Button onClick={subtractOne} color='primary'>
            Subtract One@
          </Button>
        </AddSubtract>
      </div>
    );
  }
}
export default hot(inject('store')(observer(Counter)));
// export default hot(observer(Counter));
// export default hot(Counter);
