var removeNthFromEnd = function(s1,s2) {
    let le=0
    let le2=0
    let cur=s1
    while(true){
     le++
     if (cur.next !== null) {cur = cur.next;} else {cur=s1;break;}}
     if(le==1&&s2==1){s1=null; console.log(s1); return s1}
     if(le===s2){s1=s1.next;console.log(s1);return s1}
     while(true){le2++ 
     if(le2+s2==le){cur.next=cur.next.next;break;}else{if (cur.next !== null) {cur=cur.next} else break; };}
     return s1
};