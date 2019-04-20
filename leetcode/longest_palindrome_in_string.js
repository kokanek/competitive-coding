var start = 0, max = 0;
var longestPalindrome = function(s) {
    if(s.length < 2) {
        return s;
    }
    
    for(let i=0; i<s.length-1; i++) {
        extendPal(s, i, i);
        extendPal(s, i, i+1);
    }

    return s.split("").slice(start, start+max).join("");
};

function extendPal(s, b, e) {
    while(b >= 0 && e < s.length && s[b] === s[e]) {
        b--;
        e++;
    }
    if (max < e-b-1) {
        max = e-b-1;
        start = b+1;
    }
}