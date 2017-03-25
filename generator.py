def get_generator(batch_size: int = 10):
    items = [x for x in range(1000)]
    i = 0
    while True:
        offset = batch_size * i
        _items = items[offset:offset + batch_size]
        if len(_items) == 0:
            break

        i += 1
        yield _items

g = get_generator()
for items in g:
    print(items)

