function Weather() {

};

Weather.prototype.isStormy = function() {
  return Math.floor(Math.random() * 10) < 5;
}
