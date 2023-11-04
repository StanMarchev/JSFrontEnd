function rotation(array, nRotation) {
    for(let i=0; i < nRotation; i++){
        let temp = array.shift();
        array.push(temp);
    }

    console.log(array.join(' '))
}

    rotation([51, 47, 32, 61, 21], 2)