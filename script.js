function getSum( a,b ) {
    let min = Math.min(a,b),
        max = Math.max(a,b)
    return (max - min + 1) * (max + min) / 2
}

console.log(getSum(0, 1))
// assert.strictEqual(getSum(0,-1),-1);
// assert.strictEqual(getSum(0,1),1);