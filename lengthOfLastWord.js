var lengthOfLastWord = function(s) {
    s=s.split(" ").filter(item => item !== '') 
    return s[s.length-1].length

};