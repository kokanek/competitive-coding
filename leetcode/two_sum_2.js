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
    let ans = {val: 0, next: null};
    let result = ans;
    let carry = {val:0, next: null};
    
    while(l1!==null || l2!==null || carry.val != 0) {
        let v1 = l1 ? l1.val : 0;
        let v2 = l2 ? l2.val : 0;
        let c = carry ? carry.val : 0;
        
        let sum = v1+v2+c;
        
        if(sum > 9) {
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


// solution with optimized carry
var addTwoNumbers = function(l1, l2) {    
    let ans = {val: 0, next: null};
    let result = ans;
    let carry = null;
    
    while(l1!==null || l2!==null || carry) {
        let v1 = l1 ? l1.val : 0;
        let v2 = l2 ? l2.val : 0;
        let c = carry ? carry : 0;
        
        let sum = v1+v2+c;
        if (carry) 
            carry = null;
        
        if(sum > 9) {
            ans.next = {val: sum%10, next: null};
            carry = 1;
        } else {
            ans.next = {val: sum, next: null};
        }
        l1 = l1? l1.next: l1;
        l2 = l2? l2.next: l2;
        ans = ans.next;
    }
    
    return result.next;
};