/**
 * @param {string} s
 * @param {number} numRows
 * @return {string}
 */
var convert = function(s, numRows) {
    if (s == null || numRows == 1) {
        return s;
    }
    
    let list = [];
    let direction = 1;
    let index = 0;
    let listIndex = 0;
    let result = '';
    
    while(s[index]) {
        list[listIndex] = list[listIndex] || [];
        list[listIndex].push(s[index]);
        
        if(listIndex == numRows-1) {
            direction = -1;
        } else if (listIndex == 0) {
            direction = 1;
        }
        
        listIndex += direction;
        //console.log(listIndex);
        index++;
    }

    list.forEach(item => {
        result = result.concat(item.join(''));
    })
    
    return result;
};