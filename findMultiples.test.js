describe("#findMultiples", function() {
  it("returns the correct numbers that meet targetValue", function() {
    expect(findMultiples([5, 6, 7, 5, 6, 5], 1)).toEqual(["5","6","7"]);
    expect(findMultiples([5, 6, 7, 5, 6, 5], 2)).toEqual(["5","6"]);
    expect(findMultiples([1,1,1,1,1,1,1,1,2], 3)).toEqual(["1"])
  });
  it("returns an empty array if targetValue never met", function() {
    expect(findMultiples([5, 6, 7, 5, 6, 5], 5)).toEqual([]);
    expect(findMultiples([5, 6, 7, 5, 6, 5], 5)).toEqual([]);
  });
  it("returns an empty array argument array is empty", function() {
    expect(findMultiples([], 5)).toEqual([])
  });
});
