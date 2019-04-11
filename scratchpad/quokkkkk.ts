let k = new Map();

k.set(0, 'me');
k.set(1, 'k');
let mapIterator = k.values();
mapIterator.next().value; //?
mapIterator.next().value; //?

let mEntries = k.entries();
mEntries.next().value; //?
mEntries.next().value; //?

let keysIterator = k.keys();

keysIterator.next().value; //?
keysIterator.next().value; //?

k; //?
k.delete(0);
k; //?

k.has(1); //?
