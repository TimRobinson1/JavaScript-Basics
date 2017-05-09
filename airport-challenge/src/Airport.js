function Airport() {
  this.hangar = [];
};

Airport.prototype.land = function(plane) {
  this.hangar.push(plane);
};
