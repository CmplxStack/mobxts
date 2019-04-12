import { types } from 'mobx-state-tree';

export const CounterStore = types
  .model('CounterStore', {
    count: 0,
  })
  .views(
    (self): any => ({
      get getCount(): number {
        return self.count;
      },
    }),
  );
