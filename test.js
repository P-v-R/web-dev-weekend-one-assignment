function testFunc(a,b,...rest){
    let firstTwo = a*b;
    let addRest = rest.reduce((previous, current) => {
        return previous + current
    })
    return firstTwo+addRest
}
console.log(testFunc(2,2,3,3))