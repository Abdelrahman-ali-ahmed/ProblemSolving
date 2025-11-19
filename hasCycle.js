/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */

/**
 * @param {ListNode} head
 * @return {boolean}
 */
var hasCycle = function(head) {
  let res =false;
  let arr=[];
  while(head){
    if(!arr.includes(head)){
      arr.push(head)
      head=head.next
    }else{
      res=true
      break
    }
  }

return(res);
};