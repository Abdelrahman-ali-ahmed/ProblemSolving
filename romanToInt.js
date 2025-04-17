var romanToInt = function(s) {
    const romanMap = {
    'I': 1,
    'V': 5,
    'X': 10,
    'L': 50,
    'C': 100,
    'D': 500,
    'M': 1000
};
let total = 0;
for (let i = 0; i < s.length; i++) {
    const current = romanMap[s[i]];
    const next = romanMap[s[i + 1]];
    if (next > current) {
        total += next - current;
        i++; // skip the next character
    } else {
        total += current;
    }
}
return total;
};


var romanToInt2= function(s1) {
    let res=0;
    if(s1.includes("IV")){res=res+4;s1=s1.replace("IV","")}
    if(s1.includes("IX")){res=res+9;s1=s1.replace("IX","")}
    if(s1.includes("XL")){res=res+40;s1=s1.replace("XL","")}
    if(s1.includes("XC")){res=res+90;s1=s1.replace("XC","")}
    if(s1.includes("CD")){res=res+400;s1=s1.replace("CD","")}
    if(s1.includes("CM")){res=res+900;s1=s1.replace("CM","")}
    while(s1.length!==0){
      if(s1.includes("I")){res=res+1;s1=s1.replace("I","")}
      if(s1.includes("V")){res=res+5;s1=s1.replace("V","")}
      if(s1.includes("X")){res=res+10;s1=s1.replace("X","")}
      if(s1.includes("L")){res=res+50;s1=s1.replace("L","")}
      if(s1.includes("C")){res=res+100;s1=s1.replace("C","")}
      if(s1.includes("D")){res=res+500;s1=s1.replace("D","")}
      if(s1.includes("M")){res=res+1000;s1=s1.replace("M","")}
    }
  return(res);
};