function loadingBar(num) {
    
    if(num === 100){
        console.log('100% Complete !');
    }else {
        let percentCount = '%'.repeat(num/10);
        let dotsCount = ('.').repeat(10 - percentCount.length);

        console.log(`${num}% [${percentCount}${dotsCount}]`);
        console.log('Still loading...');
    }
}

loadingBar(33);