var reverseKGroup = function(s1, s2) {
    let arr = [];
 let cur = s1;
 while (cur !== null) {
   arr.push(cur.val);
   cur = cur.next;
 }
 function splitArray(arr, chunkSize) {
   const result = [];
   for (let i = 0; i < arr.length; i += chunkSize) {
     result.push(arr.slice(i, i + chunkSize));
   }
   return result;
 }
 let result = splitArray(arr, s2);
 result = result.map(chunk => chunk.length === s2 ? chunk.reverse() : chunk);
 const flatResult = result.flat();
 if (flatResult.length === 0) return null;
 let head = new ListNode(flatResult[0]);
 let current = head;
 for (let i = 1; i < flatResult.length; i++) {
   current.next = new ListNode(flatResult[i]);
   current = current.next;
 }
 console.log(head);
 

 return head;
};