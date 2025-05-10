var generate = function(numRows) {
    const triangle = [];

 for (let row = 0; row < numRows; row++) {
   const currentRow = [1];

   for (let col = 1; col < row; col++) {
     const prevRow = triangle[row - 1];
     currentRow[col] = prevRow[col - 1] + prevRow[col];
   }

   if (row > 0) currentRow.push(1);

   triangle.push(currentRow);
 }

 return triangle;
};