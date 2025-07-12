function PowerSet(str) {
    let result=[]

    function constructSubset(subSet, index){
        if(index >= str.length) {
            result.push(subSet);
            return;
        }
        constructSubset(subSet, index + 1);
        constructSubset(subSet + str[index], index + 1);
    }

    constructSubset("", 0)
    return result
}

const output = PowerSet("abc");
console.log(output); // Output: [ '', 'c', 'b', 'bc', 'a', 'ac', 'ab', 'abc' ]