# debounce-transfer
[Build Status](https://github.com/slwzero/debounce-transfer)

Wrap function into a debounce function.

# Install
```sh
$ npm install debounce-transfer --save
```

# Usage

**debounce:**
```js
const debounceTransfer = require('debounce-transfer')
const debounce = debounceTransfer(fn, 300)

function fn(a) {
  console.log(a)
}

debounce('hi') 
debounce('hi') 
// log 'hi' once after 300ms.
```

**bind this:**
```js
const debounceTransfer = require('debounce-transfer')
const debounce = debounceTransfer(function () {
  console.log(this === window)
}, 300)

window.onresize = debounce

// log 'true' when resizing the window
```


# API

# License
MIT 