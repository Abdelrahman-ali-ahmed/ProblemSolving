var countGoodTriplets = function(arr, a, b, c) {
    let count = 0;

    for (let i=0;i<arr.length - 2;i++) {
        for (let j=i + 1;j<arr.length -1;j++){
            for (let k=j+1;k<arr.length;k++) {
            
               { if (Math.abs(arr[i] - arr[j]) > a) {continue}
                else {
                    if (Math.abs(arr[j] - arr[k]) > b) {continue}
                        else {
                            if (Math.abs(arr[i] - arr[k]) > c) {continue}
                            else {count++}
                        }
                }}
                
            }
        }
    }
    return count
};
