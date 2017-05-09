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
    spyOn(Math, 'random').and.returnValue(0.9)
    airport.land(plane);
    expect(airport.hangar).toEqual([plane]);
  });

  it("Removes planes from hangar when taking them off", function() {
    spyOn(Math, 'random').and.returnValue(0.9)
    airport.land(plane);
    airport.takeoff(plane);
    expect(airport.hangar).toEqual([]);
  });

  it("Can takeoff specific planes", function() {
    spyOn(Math, 'random').and.returnValue(0.9)
    var specialPlane = new Plane();
    airport.land(plane);
    airport.land(specialPlane);
    airport.takeoff(plane);
    expect(airport.hangar).toEqual([specialPlane]);
  });

  it("Fails to land plane if weather is stormy", function() {
    spyOn(Math, 'random').and.returnValue(0.1)
    expect(function() {
      airport.land(plane);
    }).toThrow("Weather is stormy");
  });

  it("Fails to takeoff plane if weather is stormy", function() {
    spyOn(Math, 'random').and.returnValue(0.1)
    expect(function() {
      airport.takeoff(plane);
    }).toThrow("Weather is stormy");
  });

  it("Fails to land plane if already landed", function() {
    spyOn(Math, 'random').and.returnValue(0.9)
    airport.land(plane);
    expect(function() {
      airport.land(plane);
    }).toThrow("Plane is already landed.");
  });

  it("Fails to takeoff plane if not landed", function() {
    spyOn(Math, 'random').and.returnValue(0.9)
    expect(function() {
      airport.takeoff(plane);
    }).toThrow("Plane is already flying.");
  });
});
