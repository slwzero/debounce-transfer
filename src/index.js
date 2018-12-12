
function debounceTransfer(fn, time, firstCallDebounce) {
  if (typeof fn !== 'function') {
    return console.error(new error('debounce-transfer: Expected the first argument to be a function, got ' + typeof fn))
  }

  time = time || 300
  var firstCallDebounce = firstCallDebounce || false
  var tm, called
  var callNow = !firstCallDebounce && !called
  
  return function() {
    var context = this
    var args = arguments
    if (callNow) {
        callNow = false
      return fn.apply(context, args)
    }
    if (tm) {
      clearTimeout(tm);
    }
    tm = setTimeout(function () {
      fn.apply(context, args)
      tm = null;
    }, time);
  }
}

module.exports = debounceTransfer