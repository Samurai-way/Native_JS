function largestPairSum(numbers) {
    numbers.sort((a, b) => b - a);
    return numbers[0] + numbers[1];
}

console.log(largestPairSum([10,14,2,23,19]))
// doTest([10,14,2,23,19], 42);
//     doTest([-100,-29,-24,-19,19], 0);
//     doTest([1,2,3,4,6,-1,2], 10);
//     doTest([-10, -8, -16, -18, -19], -18);