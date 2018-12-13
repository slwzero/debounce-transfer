# debounce-transfer

[![Build Status](https://travis-ci.com/slwzero/debounce-transfer.svg?branch=master)](https://travis-ci.com/slwzero/debounce-transfer)  
Wrap function into a debounce function.

# Install
```sh
$ npm install debounce-transfer --save
```

# Usage

**debounce:**
```js
const debounceTransfer = require('debounce-transfer')
const debounce = debounceTransfer(fn, 300, true)
// true means excute fn after 300ms and then every 300ms
// false means  excute fn immediately and then every 300ms; 

function fn(a) {
  console.log(a)
}

debounce('hi') 
debounce('hi') 
// log 'hi' once after 300ms.
```
**excute immediately, then debounce:**
```js
const debounceTransfer = require('debounce-transfer')
const debounce = debounceTransfer(fn, 300)

function fn(a) {
  console.log(a)
}

debounce('hi') // log 'hi' immediately, no delay.
debounce('hi2') // log 'hi2' after 300ms.
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