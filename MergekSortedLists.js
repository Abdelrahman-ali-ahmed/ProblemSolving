function ListNode(val, next) {
    this.val = (val===undefined ? 0 : val)
    this.next = (next===undefined ? null : next)
 }
var mergeKLists = function(s) {
    const arr=[]
     if (s.length===0) return null 
     for(let i=0;i<s.length;i++){
       let node=s[i]
       while(node!==null){
         arr.push(node.val)
         node=node.next
       }
     }
     arr.sort((a,b)=>a-b)
     if (arr.length === 0) return null;
     let head = new ListNode(arr[0]);
     let current = head;
     for (let i = 1; i < arr.length; i++) {
       current.next = new ListNode(arr[i]);
       current = current.next;
     }
     return(head)
};