describe("Airport", function() {
  beforeEach(function() {
    airport = new Airport();
    plane = new Plane();
  });

  it("exists as an object", function() {
    expect(airport).toBeDefined();
  });

  it("starts with no planes docked", function() {
    expect(airport.hangar).toEqual([]);
  });

  it("adds planes to hangar when landing them", function() {
    airport.land(plane);
    expect(airport.hangar).toEqual([plane]);
  });

  it("Removes planes from hangar when taking them off", function() {
    airport.land(plane);
    airport.takeoff(plane);
    expect(airport.hangar).toEqual([]);
  });

  it("Can takeoff specific planes", function() {
    var specialPlane = new Plane();
    airport.land(plane);
    airport.land(specialPlane);
    airport.takeoff(plane);
    expect(airport.hangar).toEqual([specialPlane]);
  });
});
