/**
 * Definition for isBadVersion()
 * 
 * @param {integer} version number
 * @return {boolean} whether the version is bad
 * isBadVersion = function(version) {
 *     ...
 * };
 */

/**
 * @param {function} isBadVersion()
 * @return {function}
 */
var solution = function(isBadVersion) {
    /**
     * @param {integer} n Total versions
     * @return {integer} The first bad version
     */
    return function(n) {
        
        let min = 1;
        let max = n;

        while (min < max) {
            let mid = Math.floor((min + max)/2)
            if (isBadVersion(mid)) {
                max = mid;
            }
            else {
                if (min === mid) return max;
                 min = mid;
            }
               
            }
            return max;
        } 
    };

