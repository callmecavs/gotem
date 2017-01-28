# gotem

[![gotem on NPM](https://img.shields.io/npm/v/gotem.svg?style=flat-square)](https://www.npmjs.com/package/gotem) [![Standard JavaScript Style](https://img.shields.io/badge/code_style-standard-brightgreen.svg?style=flat-square)](http://standardjs.com/)

Copy to clipboard for modern browsers in less than 1kb.

## Install

```sh
$ npm i gotem --save
```

## Use

`gotem` is a function that accepts 3 parameters:

1. A **required** trigger node.
2. A **required** target node.
3. An **optional** object of callback functions.

Examples follow:

```javascript
import gotem from 'gotem'

// a trigger and target node are required
const nodes = [
  'trigger',
  'target'
].reduce((obj, selector) => {
  obj[selector] = document.getElementById(selector)
  return obj
}, {})

// when the trigger is clicked,
// the text of the target will be copied to the clipboard
gotem(nodes.trigger, nodes.target)

// if an object with callback functions (success, error) is passed,
// the appropriate function, based on the result of executing the copy command, will be fired if it exists
gotem(nodes.trigger, nodes.target, {
  success: () => console.log('Copy command succeeded'),
  error: () => console.log('Copy command failed, BUT the text to copy has still been selected.')
})
```

## License

[MIT](https://opensource.org/licenses/MIT). © 2017 Michael Cavalea
