var reverseList = function(head) {
    let prev = null;
    let curr = head;
    while (curr) {
        let next = curr.next;
        curr.next = prev;
        prev = curr;
        curr = next;
    }
    return prev;
};


var reverseList2 = function(n) {
    let head=n
let arr=[]
while(head!==null){
  arr.push(head.val)
  head=head.next
}
if(arr.length===0) return null
arr.reverse()
const head2 = new ListNode(arr[0],null);
  let current = head2;

  for (let i = 1; i < arr.length; i++) {
    current.next = new ListNode(arr[i],null);
    current = current.next;
  }

return(head2);
};