let baseUrl = 'http://localhost:3030/jsonstore/tasks'

let loadButton = document.getElementById('load-meals');
let foodElement = document.getElementById('food');
let timeElement = document.getElementById('time');
let caloriesElement = document.getElementById('calories');

let addMealBtn = document.getElementById('add-meal');
let editMealBtn = document.getElementById('edit-meal');

let divList = document.getElementById('list');

let currentMealId = null;
loadButton.addEventListener('click', loadMeals);

async function loadMeals() {
    divList.innerHTML = '';

    let response = await fetch(baseUrl);
    let data = await response.json();
    let dataValues = Object.values(data);

    for (const element of dataValues) {

        let currentFood = element.food;
        let currentTime = element.time;
        let currentCalories = element.calories;
        let currentId = element._id;

        let divContainer = document.createElement('div');
        divContainer.className = 'meal';

        let h2Meal = document.createElement('h2');
        let h3Time = document.createElement('h3');
        let h3Calories = document.createElement('h3');

        let divBtnMeal = document.createElement('div');
        divBtnMeal.id = 'meal-buttons';

        let changeBtn = document.createElement('button');
        changeBtn.textContent = 'Change';
        changeBtn.className = 'change-meal';

        let deleteBtn = document.createElement('button');
        deleteBtn.textContent = 'Delete';
        deleteBtn.className = 'delete-meal';

        divList.appendChild(divContainer);
        divContainer.appendChild(h2Meal);
        divContainer.appendChild(h3Time);
        divContainer.appendChild(h3Calories);
        divContainer.appendChild(divBtnMeal);
        divBtnMeal.appendChild(changeBtn);
        divBtnMeal.appendChild(deleteBtn);


        h2Meal.textContent = currentFood;
        h3Time.textContent = currentTime;
        h3Calories = currentCalories;

        changeBtn.addEventListener('click', async () => {
            document.getElementById('food').value = currentFood;
            document.getElementById('time').value = currentTime;
            document.getElementById('calories').value = currentCalories;

            divContainer.remove();

            addMealBtn.disabled = true;

            editMealBtn.disabled = false;

            currentMealId = currentId;
        })

        deleteBtn.addEventListener('click', () => {
            divContainer.remove();

            fetch(`${baseUrl}/${currentId}`, {
                method: 'DELETE'
            });
            loadMeals();

        })

    }

}

addMealBtn.addEventListener('click', addMeal);
function addMeal() {
    let currentFood = foodElement.value;
    let currentTime = timeElement.value;
    let currentCalories = caloriesElement.value;

    if (currentFood === '' || currentTime === '' || currentCalories === '') {
        return;
    }

    let obj = {
        food: currentFood,
        time: currentTime,
        calories: currentCalories,
    }
    fetch(baseUrl, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(obj)
    })

    foodElement.value = '';
    timeElement.value = '';
    caloriesElement.value = '';

    loadMeals();
}

editMealBtn.addEventListener('click', async (e) => {
    e.preventDefault();

    let currentFood = document.getElementById('meal');
    let currentTime = document.getElementById('time');
    let currentCalories = document.getElementById('calories');
    let currentId = currentMealId;

    let obj = {
        food: currentFood,
        time: currentTime,
        calories: currentCalories,
        _id: currentId,
    }

    await fetch(`${baseUrl}/${currentId}`, {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(obj)
    })

    document.getElementById('food').value = '';
    document.getElementById('time').value = '';
    document.getElementById('calories').value = '';

    loadMeals();

    addMealBtn.disabled = false;

    editMealBtn.disabled = true;
})
