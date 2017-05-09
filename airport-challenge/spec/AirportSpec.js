describe("Airport", function() {
  beforeEach(function() {
    airport = new Airport();
    plane = 'placeholder_plane'
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
});
