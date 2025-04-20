var permuteUnique = function(x) {
    function getPermutations(arr) {
 if (arr.length === 0) return [[]];

 const result = [];

 for (let i = 0; i < arr.length; i++) {
   const current = arr[i];
   const remaining = arr.slice(0, i).concat(arr.slice(i + 1));
   const remainingPerms = getPermutations(remaining);

   for (const perm of remainingPerms) {
     result.push([current, ...perm]);
   }
 }

 return result;
}

// Wrapper function to return unique permutations
function uniquePermutations(x) {
 const seen = new Set();
 const result = [];

 for (const perm of getPermutations(x)) {
   const key = JSON.stringify(perm);
   if (!seen.has(key)) {
     seen.add(key);
     result.push(perm);
   }
 }

 return result;
}
return uniquePermutations(x)

};