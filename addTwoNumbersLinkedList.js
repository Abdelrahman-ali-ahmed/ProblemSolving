var addTwoNumbers = function(l1, l2) {
    let dummyHead = new ListNode(0);
 let p = l1, q = l2, current = dummyHead;
 let carry = 0;

 while (p !== null || q !== null) {
   let x = (p !== null) ? p.val : 0;
   let y = (q !== null) ? q.val : 0;
   let sum = carry + x + y;
   carry = Math.floor(sum / 10);
   let digit = sum % 10;
   current.next = new ListNode(digit);
   current = current.next;
   if (p !== null) p = p.next;
   if (q !== null) q = q.next;
 }
 if (carry > 0) {
   current.next = new ListNode(carry);
 }

 return dummyHead.next;
};
var addTwoNumbers2 = function(l1, l2) {
    let arr1=[]
     let arr2=[]
     const linkToArr=(li)=>{
      let arr=[]
      let cur= li
      while(true){
      arr.push(cur.val)
        if(cur.next!==null){
          cur=cur.next
        }else{
          break
        }
       }
       return arr
     }
      arr1=linkToArr(s1).reverse()
       console.log (BigInt(arr1.join("")))
      arr2=linkToArr(s2).reverse()
      let res=BigInt(arr1.join(""))+BigInt(arr2.join(""))
      let arrLink=res.toString().split("").reverse().map((el)=>Number(el));
      let head = new ListNode(arrLink[0]);
      let current = head;
      for (let i = 1; i < arrLink.length; i++) {
         if (arrLink[i].toString().includes("n")){
console.log(arrLink[i].toString().replace("n",""))
arrLink[i]=Number(arrLink[i].toString().replace("n",""))
        }
        current.next = new ListNode(arrLink[i]);
        current = current.next;
      }
      
      return(head);
};