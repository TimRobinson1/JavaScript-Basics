function Airport() {
  this.hangar = [];
  this.weather = new Weather();
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


// Private

Airport.prototype._landingChecks = function(plane) {
  if (this.weather.isStormy()) {
    throw "Weather is stormy";
  } else if (plane.isFlying === false) {
    throw "Plane is already landed.";
  }
}

Airport.prototype._takeoffChecks = function(plane) {
  if (this.weather.isStormy()) {
    throw "Weather is stormy";
  } else if (plane.isFlying) {
    throw "Plane is already flying.";
  }
}
