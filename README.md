Emoji String Tools
=========

[![Build Status](https://travis-ci.org/foopod/emoji-string-tools.svg?branch=master)](https://travis-ci.org/foopod/emoji-string-tools)

[![Coverage Status](https://coveralls.io/repos/github/foopod/emoji-string-tools/badge.svg?branch=master)](https://coveralls.io/github/foopod/emoji-string-tools?branch=master)

A JS Module to help manipulate strings that contain emoji

## Installation

  `npm install emoji-string-tools`

## Usage

``` javascript
    const emojiStringTools = require('emoji-string-tools');

    emojiStringTools.isEmojiOnly("✊👊✊👊✊👊✊👊"); //true
    emojiStringTools.isEmojiOnly("Go suck a 🍆!"); //false
```


## Tests

  `npm test`

## Contributing

In lieu of a formal style guide, take care to maintain the existing coding style. Add unit tests for any new or changed functionality. Lint and test your code.