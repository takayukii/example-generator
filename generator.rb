def get_generator(batch_size = 10)
  items = (0..999).to_a
  Enumerator.new do |enum|
    i = 0
    while true
      offset = batch_size * i
      _items = items[offset, batch_size]
      if _items == nil || _items.length == 0
        break
      end

      enum.yield _items
      i +=1
    end
  end
end

g = get_generator
g.each do |items|
  p items
end
