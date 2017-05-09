describe("Plane", function() {
  beforeEach(function() {
    plane = new Plane();
  });

  it("exists as an object", function() {
    expect(plane).toBeDefined();
  });

  it("starts as flying", function() {
    expect(plane.isFlying).toEqual(true);
  });
});
