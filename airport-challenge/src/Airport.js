function Airport() {
  this.hangar = [];
};

Airport.prototype.land = function(plane) {
  this.hangar.push(plane);
};

Airport.prototype.takeoff = function(plane) {
  var index = this.hangar.indexOf(plane);
  this.hangar.splice(index, 1);
};
