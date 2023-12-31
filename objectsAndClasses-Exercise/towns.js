function solve(inputArr) {
    inputArr.map((city) => {
        let [town, latitude, longitude] = city.split(" | ");
        return { town, latitude, longitude };
    }).forEach((city) => {
        
        let latitude = Number(city.latitude).toFixed(2);
        let longitude = Number(city.longitude).toFixed(2);
        console.log(`{ town: '${city.town}', latitude: '${latitude}', longitude: '${longitude}' }`);
    })
}

solve(["Sofia | 42.696552 | 23.32601", "Beijing | 39.913818 | 116.363625"]);