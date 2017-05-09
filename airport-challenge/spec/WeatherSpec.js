describe("Plane", function() {
  beforeEach(function() {
    weather = new Weather();
  });

  it("exists as an object", function() {
    expect(weather).toBeDefined();
  });

  it("can return as stormy weather", function() {
    spyOn(Math, 'random').and.returnValue(0.1)
    expect(weather.isStormy()).toEqual(true);
  });

  it("can return as clear weather", function() {
    spyOn(Math, 'random').and.returnValue(0.9)
    expect(weather.isStormy()).toEqual(false);
  });
});
