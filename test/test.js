'use strict';

var expect = require('chai').expect;
var emojiLib = require('../index');

describe('emojiLib.isOnlyEmoji', function() {
    it('should detect a single non-emoji character', function() {
        var result = emojiLib.isOnlyEmoji("😉f😣😅");
        expect(result).to.equal(false);
    });

    it('should confirm a string only contains emoji', function() {
        var result = emojiLib.isOnlyEmoji("😉😣😅");
        expect(result).to.equal(true);
    });
});