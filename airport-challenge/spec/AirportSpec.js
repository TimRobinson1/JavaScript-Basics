describe("Airport", function() {
  beforeEach(function() {
    airport = new Airport(new Weather);
    plane = new Plane();
  });

  describe("Stormy weather", function() {
    beforeEach(function() {
      spyOn(Math, 'random').and.returnValue(0.1);
    });

    it("Fails to land plane if weather is stormy", function() {
      expect(function() {
        airport.land(plane);
      }).toThrow("Weather is stormy");
    });

    it("Fails to takeoff plane if weather is stormy", function() {
      expect(function() {
        airport.takeoff(plane);
      }).toThrow("Weather is stormy");
    });
  });

  describe("Clear weather", function() {
    beforeEach(function() {
      spyOn(Math, 'random').and.returnValue(0.9);
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


    it("Fails to land plane if already landed", function() {
      airport.land(plane);
      expect(function() {
        airport.land(plane);
      }).toThrow("Plane is already landed.");
    });

    it("Fails to takeoff plane if not landed", function() {
      expect(function() {
        airport.takeoff(plane);
      }).toThrow("Plane is already flying.");
    });

    it("Starts with a default capacity", function() {
      expect(airport.capacity).toEqual(10);
    });

    it("Can be adjusted to a different capacity", function() {
      airport.setCapacity(20);
      expect(airport.capacity).toEqual(20);
    });

    it("Throws error if capacity is set to 0 or lower", function() {
      expect(function() {
        airport.setCapacity(0);
      }).toThrow("Invalid capacity for the airport");
    });

    it("Throws error if capacity is set lower than plane count", function() {
      airport.land(plane);
      airport.land(new Plane);
      expect(function() {
        airport.setCapacity(1);
      }).toThrow("Too many planes in hangar to set capacity that low");
    });
  });
});
