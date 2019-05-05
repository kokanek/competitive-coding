/**
 * @param {string[]} strs
 * @return {string}
 */
var longestCommonPrefix = function(strs) {
    if (strs.length === 0)
        return '';
    
    if (strs.length === 1) {
        return strs[0];
    }
    
    let i = 0;
    let match = true;
    var c;
    while(match) {
        c = strs[0][i];

        if(c == null) {
            break;
        }
        
        for(let j = 1; j<strs.length; j++) {
            if (strs[j][i] == null) {
                match = false;
                break;
            }
            
            if(strs[j][i] != null && c != null && strs[j][i] !== c) {
                match = false;
                break;
            }
        }

        if (match)
            i++;
    }
    
    if (i == 0)
        return '';
    else 
        return strs[0].slice(0, i);
    
};