const baseURL = 'http://localhost:3030/jsonstore/tasks';

const loadVacationsButton = document.getElementById('load-vacations');
const vacationList = document.getElementById('list');
const nameInput = document.getElementById('name');
const numDaysInput = document.getElementById('num-days');
const fromDateInput = document.getElementById('from-date');
const formAddButton = document.getElementById('add-vacation');
const formEditButton = document.getElementById('edit-vacation');
const formElement = document.querySelector('#form form');

loadVacationsButton.addEventListener('click', loadVacations);

formAddButton.addEventListener('click', (e)=> {
    e.preventDefault();
    
    const newVacation = {
        name: nameInput.value,
        days: numDaysInput.value,
        date: fromDateInput.value
    };

    fetch(baseURL,{
        method:'Post',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(newVacation)
    })
        .then(loadVacations)
        .then(clearForm);
       
formEditButton.addEventListener('click', (e)=> {
    e.preventDefault();

   const vacationId = formElement.dataset.vacation;

    const vacation = {
        _id: vacationId,
        name: nameInput.value,
        days: numDaysInput.value,
        date: fromDateInput.value
    };

    fetch(`${baseURL}/${vacationId}`, {
        method: 'PUT',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(vacation )
    })

        .then(loadVacations)
        .then(() => {
            formAddButton.removeAttribute('disabled');

            formEditButton.setAttribute('disabled', 'disabled');
            clearForm();
            delete formElement.dataset.vacation

    });


    
} )

});

function clearForm(){
    nameInput.value = '';
    numDaysInput.value = '';
    fromDateInput.value = '';
}


function renderVacations(vacations) {
    vacationList.innerHTML = '';
    
    vacations
    .map(renderVacation)
    .forEach(vactionElement => vacationList.appendChild(vactionElement))
}

function loadVacations(){
    return fetch(baseURL)
        .then(res=> res.json())
        .then(result => {
            renderVacations(Object.values(result));
    });
}

function renderVacation(vacation) {
    const container = document.createElement('div');
    container.className = 'container';

    const h2Element = document.createElement('h2');
    h2Element.textContent = vacation.name;

    const h3DateElement = document.createElement('h3');
    h3DateElement.textContent = vacation.date;
    
    const h3DaysElement = document.createElement('h3')
    h3DaysElement.textContent = vacation.days;

    const changeButton = document.createElement('button');
    changeButton.className = 'change-btn';
    changeButton.textContent = 'Change';
    changeButton.addEventListener('click', ()=> {
        nameInput.value = vacation.name;
        numDaysInput.value = vacation.days;
        fromDateInput.value = vacation.date;
        
        container.remove();

        formEditButton.removeAttribute('disabled');

        formAddButton.setAttribute('disabled', 'disabled');

        formElement.dataset.vacation = vacation._id


    })

    const doneButton = document.createElement('button');
    doneButton.className = 'done-btn';
    doneButton.textContent = 'Done';
    doneButton.addEventListener('click', ()=> {
        fetch(`${baseURL}/${vacation._id}`, {
            method: 'DELETE'
        })
        .then(loadVacations)
    })

    container.appendChild(h2Element);
    container.appendChild(h3DateElement);
    container.appendChild(h3DaysElement);
    container.appendChild(changeButton);
    container.appendChild(doneButton);

    return container;
}
