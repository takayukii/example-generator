function getGenerator(batchSize = 10) {
  return function* () {
    const items = [...Array(1000).keys()];
    let i = 0;
    while (true) {
      const offset = batchSize * i;
      const _items = items.slice(offset, offset + batchSize);
      if (_items.length === 0) {
        break;
      }
      i ++;
      yield _items;
    }
  }
}


const it = {};
it[Symbol.iterator] = getGenerator();

for (let items of it) {
  console.log(items);
}


