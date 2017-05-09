function Airport() {
  this.hangar = [];
  this.weather = new Weather();
  this.capacity = 10;
};

Airport.prototype.land = function(plane) {
  this._landingChecks(plane);
  plane.land();
  this.hangar.push(plane);
};

Airport.prototype.takeoff = function(plane) {
  this._takeoffChecks(plane);
  plane.takeoff();
  var index = this.hangar.indexOf(plane);
  this.hangar.splice(index, 1);
};

Airport.prototype.setCapacity = function(num) {
  this._capacityCheck(num)
  this.capacity = num;
};

// Private

Airport.prototype._landingChecks = function(plane) {
  if (this.weather.isStormy()) {
    throw "Weather is stormy";
  } else if (plane.isFlying === false) {
    throw "Plane is already landed.";
  };
};

Airport.prototype._takeoffChecks = function(plane) {
  if (this.weather.isStormy()) {
    throw "Weather is stormy";
  } else if (plane.isFlying) {
    throw "Plane is already flying.";
  };
};

Airport.prototype._capacityCheck = function(num) {
  if (num <= 0) {
    throw "Invalid capacity for the airport"
  } else if (num < this.hangar.length) {
    throw "Too many planes in hangar to set capacity that low"
  }
};
