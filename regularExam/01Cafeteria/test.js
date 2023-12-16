function CoffeeShop(input) {
    const baristas = {};

    function prepareCoffee(barista, shift, coffeeType) {
        if (baristas[barista] && baristas[barista].shift === shift && baristas[barista].drinks && baristas[barista].drinks.includes(coffeeType)) {
            console.log(`${barista} has prepared a ${coffeeType} for you!`);
        } else {
            console.log(`${barista} is not available to prepare a ${coffeeType}.`);
        }
    }

    const n = Number(input[0]);

    for (let i = 1; i <= n; i++) {
        const [name, shift, drinks] = input[i].split(' ');
        baristas[name] = { shift, drinks: drinks.split(',') };
    }

    for (let i = n + 1; i < input.length - 1; i++) {
        const [action, barista, ...params] = input[i].split(' / ');

        switch (action) {
            case 'Prepare':
                prepareCoffee(barista, ...params);
                break;
            case 'Change Shift':
                console.log(`${barista} has updated his shift to: ${params[0]}`);
                if (baristas[barista]) {
                    baristas[barista].shift = params[0];
                } else {
                    console.log(`Barista ${barista} does not exist.`);
                }
                break;
            case 'Learn':
                if (!baristas[barista]) {
                    console.log(`Barista ${barista} does not exist.`);
                    break;
                }
                if (!baristas[barista].drinks) {
                    baristas[barista].drinks = [];
                }
                if (!baristas[barista].drinks.includes(params[0])) {
                    baristas[barista].drinks.push(params[0]);
                    console.log(`${barista} has learned a new coffee type: ${params[0]}.`);
                } else {
                    console.log(`${barista} knows how to make ${params[0]}.`);
                }
                break;
        }
    }

    
    Object.entries(baristas).forEach(([barista, info]) => {
        const drinks = info.drinks ? info.drinks.join(', ') : '';
        console.log(`Barista: ${barista}, Shift: ${info.shift}, Drinks: ${drinks}`);
    });
}


const input = [
    '3',
    'Alice day Espresso,Cappuccino',
    'Bob night Latte,Mocha',
    'Carol day Americano,Mocha',
    'Prepare / Alice / day / Espresso',
    'Change Shift / Bob / night',
    'Learn / Carol / Latte',
    'Learn / Bob / Latte',
    'Prepare / Bob / night / Latte',
    'Closed'
];

t
CoffeeShop(input);
