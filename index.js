'use strict';

const isEmoji = require('isemoji');
const split = require('emoji-aware').split;

/**
 * Detects if a string only contains emoji
 * @param {string} string
 * @return {boolean}
 */
module.exports.isOnlyEmoji = function(str) {
    var arr = split(str);
    for(var i = 0; i < arr.length; i++){
        if(!isEmoji(arr[i])){
            return false;
        }
    }
    return true;
};