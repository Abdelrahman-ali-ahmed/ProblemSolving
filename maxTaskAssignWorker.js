var maxTaskAssign = function(tasks, workers, pills, strength) {
    const sortedTasks1 = [...tasks].sort((a, b) => a - b);
    const sortedWorkers1 = [...workers].sort((a, b) => a - b);
    
    const sortedTasks2 = [...tasks].sort((a, b) => b - a);
    const sortedWorkers2 = [...workers].sort((a, b) => a - b);
    
    const sortedTasks3 = [...tasks].sort((a, b) => a - b);
    const sortedWorkers3 = [...workers].sort((a, b) => b - a);

    const sortedTasks4 = [...tasks].sort((a, b) => b-a);
    const sortedWorkers4 = [...workers].sort((a, b) => b-a);
    
    let pills1 = pills;
    let pills2 = pills;
    let pills3 = pills;
    let pills4 = pills;
    
    let count1 = 0, count2 = 0, count3 = 0 , count4 = 0;
    
    let i = 0;
    while (
      (i < sortedTasks1.length && i < sortedWorkers1.length) ||
      (i < sortedTasks2.length && i < sortedWorkers2.length) ||
      (i < sortedTasks3.length && i < sortedWorkers3.length) || 
      (i < sortedTasks4.length && i < sortedWorkers4.length)
    ) {
      // Strategy 1
      if (i < sortedTasks1.length && i < sortedWorkers1.length) {
        const w = sortedWorkers1[i];
        const t = sortedTasks1[i];
        if (w >= t) {
          count1++;
        } else if (w + strength >= t && pills1 > 0) {
          count1++;
          pills1--;
        }
      }
    
      // Strategy 2
      if (i < sortedTasks2.length && i < sortedWorkers2.length) {
        const w = sortedWorkers2[i];
        const t = sortedTasks2[i];
        if (w >= t) {
          count2++;
        } else if (w + strength >= t && pills2 > 0) {
          count2++;
          pills2--;
        }
      }
    
      // Strategy 3
      if (i < sortedTasks3.length && i < sortedWorkers3.length) {
        const w = sortedWorkers3[i];
        const t = sortedTasks3[i];
        if (w >= t) {
          count3++;
        } else if (w + strength >= t && pills3 > 0) {
          count3++;
          pills3--;
        }
      }
      if (i < sortedTasks4.length && i < sortedWorkers4.length) {
        const w = sortedWorkers4[i];
        const t = sortedTasks4[i];
        if (w >= t) {
          count4++;
        } else if (w + strength >= t && pills4 > 0) {
          count4++;
          pills4--;
        }
      }
    
      i++;
    }
    
    console.log(Math.max(count1, count2, count3,count4));
return Math.max(count1, count2, count3,count4);
};