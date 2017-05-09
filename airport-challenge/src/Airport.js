function Airport() {
  this.hangar = [];
};

Airport.prototype.land = function(plane) {
  var weather = new Weather();
  if (weather.isStormy()) {
    throw "Weather is stormy";
  }
  plane.land();
  this.hangar.push(plane);
};

Airport.prototype.takeoff = function(plane) {
  plane.takeoff();
  var index = this.hangar.indexOf(plane);
  this.hangar.splice(index, 1);
};
