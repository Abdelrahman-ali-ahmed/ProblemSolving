

const  deleteDuplicatesSortedLinkedList =() =>{
   if(head===null){
      return head
    }
    const arr=[]
    arr.push(head.val)
    let pointer=head.next
    while(pointer!== null){
      if(arr.indexOf(pointer.val)===-1){
        arr.push(pointer.val)
      }
    pointer=pointer.next
    }
  let tamp = null;
for (let i = arr.length - 1; i >= 0; i--) {
  let node = new ListNode(arr[i], tamp);
  tamp = node;
}
return tamp;
}



const  deleteDuplicatesSortedLinkedList2 =() =>{
     if(head===null){
      return head
    }
    const arr=[]
    arr.push(head.val)
    let tamp=head
    let pointer=head.next
    while(pointer!== null){
      if(arr.indexOf(pointer.val)===-1){
        arr.push(pointer.val)
          tamp = pointer;
      }
      else{
  tamp.next = pointer.next
      }
      pointer=pointer.next
      
    }
    
    return(head);
}


