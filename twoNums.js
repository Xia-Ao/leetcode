var twoSum = function(nums, target) {
//    let map = new Map();
//     for (let i =0; i< nums.length; i++) {
//         let diff = target - nums[i];
//         if (map.has(diff)) {
//             return [map.get(diff), i]
//         }
//         map.set(nums[i], i);
//     }

    let map = [];
    for (let i = 0; i< nums.length; i++) {
        let diff = target - nums[i];
        if(map[diff] !== undefined){
            return [map[diff] ,i]
        }
        map[nums[i]] = i;
        console.log(map);
    }
}



console.log(twoSum([-1,0, -1,-1,-2,-5], -3));


