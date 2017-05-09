describe("Plane", function() {
  beforeEach(function() {
    plane = new Plane();
    airport = new Airport();
  });


  it("exists as an object", function() {
    expect(plane).toBeDefined();
  });

  it("starts as flying", function() {
    expect(plane.isFlying).toEqual(true);
  });

  it("can be given a landed status", function() {
    plane.land();
    expect(plane.isFlying).toEqual(false)
  });

  it("can be set to flying after landing", function() {
    plane.land();
    plane.takeoff();
    expect(plane.isFlying).toEqual(true);
  });
});
