var solveNQueens = function(n) {
    const results = [];
 
   function createBoard(positions) {
     return positions.map(col => {
       return '.'.repeat(col) + 'Q' + '.'.repeat(n - col - 1);
     });
   }
 
   function backtrack(row, cols, diag1, diag2, positions) {
     if (row === n) {
       results.push(createBoard(positions));
       return;
     }
 
     for (let col = 0; col < n; col++) {
       if (cols.has(col) || diag1.has(row - col) || diag2.has(row + col)) {
         continue;
       }
       cols.add(col);
       diag1.add(row - col);
       diag2.add(row + col);
       positions.push(col);
       backtrack(row + 1, cols, diag1, diag2, positions);
       cols.delete(col);
       diag1.delete(row - col);
       diag2.delete(row + col);
       positions.pop();
     }
   }
 
   backtrack(0, new Set(), new Set(), new Set(), []);
   return(results)
};