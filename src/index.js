
function debounceTransfer(fn, time) {
  time = time || 300
  var tm; 
  return function() {
    if (tm) {
      clearTimeout(tm);
    }
    tm = setTimeout(function () {
      fn();
      tm = null;
    }, time);
  }
}
module.exports = debounceTransfer