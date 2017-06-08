'use strict';

const isEmoji = require('isemoji');
const split = require('emoji-aware').split;

/**
 * Detects if a string only contains emoji
 * @param {string} string
 * @return {boolean}
 */
module.exports.isOnlyEmoji = function(string) {
    var array = split(string);
    for(var i = 0; i < array.length; i++){
        if(!isEmoji(array[i])){
            return false;
        }
    }
    return true;
};

/**
 * Strips characters that are not emoji
 * @param {string} string
 * @return {string}
 */
module.exports.stripNonEmoji = function(string) {
    var array = split(string);
    var output = "";
    for(var i = 0; i < array.length; i++){
        if(isEmoji(array[i])){
            output += array[i];
        }
    }
    return output;
};