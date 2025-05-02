/**
 * @param {number[]} tasks
 * @param {number[]} workers
 * @param {number} pills
 * @param {number} strength
 * @return {number}
 */
var maxTaskAssign = function(tasks, workers, pills, strength) {
    // Sort tasks and workers in ascending order
     const sortedTasks = [...tasks].sort((a, b) => a - b);
     const sortedWorkers = [...workers].sort((a, b) => a - b);
     
     let taskIndex = 0;
     let workerIndex = 0;
     let count = 0;
     let remainingPills = pills;
     
     // Try to assign tasks without pills first
     while (taskIndex < sortedTasks.length && workerIndex < sortedWorkers.length) {
         if (sortedWorkers[workerIndex] >= sortedTasks[taskIndex]) {
             count++;
             taskIndex++;
             workerIndex++;
         } else {
             taskIndex++;
         }
     }
     
     // Reset indices for second pass
     taskIndex = 0;
     workerIndex = 0;
     
     // Try to use pills for unassigned tasks
     while (taskIndex < sortedTasks.length && workerIndex < sortedWorkers.length && remainingPills > 0) {
         if (sortedWorkers[workerIndex] >= sortedTasks[taskIndex]) {
             // Skip tasks that can be done without pills
             taskIndex++;
             workerIndex++;
         } else if (sortedWorkers[workerIndex] + strength >= sortedTasks[taskIndex]) {
             // Use a pill if it helps
             count++;
             remainingPills--;
             taskIndex++;
             workerIndex++;
         } else {
             // Can't handle this task even with pill
             if (workerIndex < sortedWorkers.length - 1 && 
                 sortedWorkers[workerIndex + 1] + strength >= sortedTasks[taskIndex]) {
                 workerIndex++;
             } else {
                 taskIndex++;
             }
         }
     }
     
     // Try the reverse order
     const reversedTasks = [...tasks].sort((a, b) => b - a);
     const reversedWorkers = [...workers].sort((a, b) => b - a);
     
     taskIndex = 0;
     workerIndex = 0;
     let count2 = 0;
     let remainingPills2 = pills;
     
     // Try to assign tasks without pills first
     while (taskIndex < reversedTasks.length && workerIndex < reversedWorkers.length) {
         if (reversedWorkers[workerIndex] >= reversedTasks[taskIndex]) {
             count2++;
             taskIndex++;
             workerIndex++;
         } else {
             taskIndex++;
         }
     }
     
     // Reset indices for second pass
     taskIndex = 0;
     workerIndex = 0;
     
     // Try to use pills for unassigned tasks
     while (taskIndex < reversedTasks.length && workerIndex < reversedWorkers.length && remainingPills2 > 0) {
         if (reversedWorkers[workerIndex] >= reversedTasks[taskIndex]) {
             // Skip tasks that can be done without pills
             taskIndex++;
             workerIndex++;
         } else if (reversedWorkers[workerIndex] + strength >= reversedTasks[taskIndex]) {
             // Use a pill if it helps
             count2++;
             remainingPills2--;
             taskIndex++;
             workerIndex++;
         } else {
             // Can't handle this task even with pill
             if (workerIndex < reversedWorkers.length - 1 && 
                 reversedWorkers[workerIndex + 1] + strength >= reversedTasks[taskIndex]) {
                 workerIndex++;
             } else {
                 taskIndex++;
             }
         }
     }
     
     return Math.max(count, count2);
 };