function coffeeShop(input) {
    const baristas = {};

    function prepareCoffee(barista, shift, coffeeType) {
        if (baristas[barista] && baristas[barista].shift === shift && baristas[barista].drinks && baristas[barista].drinks.includes(coffeeType)) {
            console.log(`${barista} has prepared a ${coffeeType} for you!`);
        } else {
            console.log(`${barista} is not available to prepare a ${coffeeType}.`);
        }
    }

    const n = Number(input.shift());

    for (let i = 0; i < n; i++) {
        const [barista, shift, drinks] = input.shift().split(' ');
        baristas[barista] = { shift, drinks: drinks.split(',') };
    }

    for (const command of input) {
        if (command === 'Closed') {
            break;
        }

        const [action, barista, ...params] = command.split(' / ');

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

    // Print baristas' information without extra spaces
    Object.entries(baristas).forEach(([barista, info]) => {
        const drinks = info.drinks ? info.drinks.join(', ') : '';
        console.log(`Barista: ${barista}, Shift: ${info.shift}, Drinks: ${drinks}`);
    });
}

// Test input
const input = [
    '1',
    '4',
    '2',
    'Alice day Espresso,Cappuccino',
    '3',
    'Bob night Latte,Mocha',
    '4',
    'Carol day Americano,Mocha',
    '5',
    'David night Espresso',
    '6',
    'Learn / Carol / Latte',
    '7',
    'Closed'
];

// Run the function with the test input
coffeeShop(input);
