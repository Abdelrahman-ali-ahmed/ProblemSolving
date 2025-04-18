var isPalindrome = function(s) {
    return s.toString().split("").reverse().join("") === s.toString().split("").join("")
};