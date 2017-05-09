describe("Plane", function() {
  beforeEach(function() {
    plane = new Plane();
    airport = new Airport();
    spyOn(Math, 'random').and.returnValue(0.9)
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

  it("has the flying status changed by airport", function() {
    airport.land(plane);
    expect(plane.isFlying).toEqual(false);
  });

  it("is flying after being called by airport to takeoff", function() {
    airport.land(plane);
    airport.takeoff(plane);
    expect(plane.isFlying).toEqual(true);
  });
});
