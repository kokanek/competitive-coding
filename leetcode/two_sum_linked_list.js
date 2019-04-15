/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
var addTwoNumbers = function(l1, l2) {
    if(l1.val === 0) {
        return l2;
    }
    
    if(l2.val === 0) {
        return l1;
    }
    
//     let start = l1;
    
//     do {
//         addAndPropogate(l1, l2.val);
//         l1 = l1.next;
//         l2 = l2.next;
//         print(l1);
//         print(l2);
//         if(l1 === null && l2 !== null) {
//             l1 = l2;
//         }
//         if(l2 === null) {
//             break;
//         }
//     } while (l2 != null);
    
    let ans = {val: 0, next: null};
    let result = ans;
    let carry = {val:0, next: null};
    
    while(l1!==null || l2!==null || carry.val != 0) {
        let v1 = l1 ? l1.val : 0;
        let v2 = l2 ? l2.val : 0;
        let c = carry ? carry.val : 0;
        
        let sum = v1+v2+c;
        
        if(sum > 9) {
            //console.log('reached here');
            ans.next = {val: sum%10, next: null};
            carry.next = {val: 1, next: null};
        } else {
            ans.next = {val: sum, next: null};
            carry.next = {val: 0, next: null};
        }
        l1 = l1? l1.next: l1;
        l2 = l2? l2.next: l2;
        carry = carry? carry.next: carry;
        ans = ans.next;
    }
    
    return result.next;
};

function addAndPropogate(l1, num) {
    if((l1.val+num) > 9) {
        l1.val = (l1.val+num)%10;
        if(l1.next !== null) {
            addAndPropogate(l1.next, 1);
        } else {
            l1.next = {val: 1, next: null};
        }
        
    } else {
        //console.log("before:", l1, num);
        l1.val = l1.val+num;
        //console.log("after:", l1, num);
    }
}

function print(node) {
    let out = '';
    while(node !== null) {
        out = out+"->"+node.val;
        node = node.next;
    }
    console.log(out);
}