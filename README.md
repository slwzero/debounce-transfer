# Usage
## arguments
* `debounceTransfer`: the function to debounce
* `fn`: the function of input trigger
* `time`: milliseconds of setTimeout interval

```
const db = require('debounce-transfer');

const debounced = db(function(e) {console.log(e)}, 400);
debounced('hello-world');
debounced('debounced');
```