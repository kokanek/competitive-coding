var lengthOfLongestSubstring = function(s) {
    let arr = s.split('');
    let d = {};
    let max = 0;
    var i = 0;
    var j = 0;
    //console.log(d[0]);
    while(i <= arr.length-1 && j <= arr.length-1) {
        
        let count = 0;
        for(j = i; j<arr.length; j++) {
            if(d[arr[j]] === undefined) {
                // Not found in hash
                d[arr[j]] = j;
                count++;
            } else {
                if(d[arr[j]] >= i) {
                    // Found in hash, so repeating. reset hash and move pointer to next index of the first occurence of the character
                    i = d[arr[j]]+1;
                    d = {};
                    break;
                } else {
                    // The repeated occurrence was a part of last interation
                    count++;
                    d[arr[j]] = j;
                }
            }
            
        }
        max = Math.max(count, max);
    }
    return max;
};