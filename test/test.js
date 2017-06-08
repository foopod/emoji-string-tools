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

describe('emojiLib.stripNonEmoji', function() {
    it('should remove a single non-emoji character', function() {
        var result = emojiLib.stripNonEmoji("😉f😣😅");
        expect(result).to.equal("😉😣😅");
    });

    it('should remove multiple non-emoji characters', function() {
        var result = emojiLib.stripNonEmoji("😉f😣as😅 oh wow");
        expect(result).to.equal("😉😣😅");
    });

    it('should not remove emoji characters', function() {
        var result = emojiLib.stripNonEmoji("👩‍👩‍👧‍👦👝👒👩‍👧‍👦😾👊🏼");
        expect(result).to.equal("👩‍👩‍👧‍👦👝👒👩‍👧‍👦😾👊🏼");
    });
});