const baseUrl = 'http://localhost:3030/jsonstore/tasks/';
 
const listContainer = document.getElementById('list');
listContainer.innerHTML = '';
const loadHistoryBtn = document.getElementById('load-history');
const locationFormField = document.getElementById('location');
const temperatureFormField = document.getElementById('temperature');
const dateFormField = document.getElementById('date');
const addWeatherBtn = document.getElementById('add-weather');
const editWeatherBtn = document.getElementById('edit-weather');
const formAction = dateFormField.parentNode;
 
 
loadHistoryBtn.addEventListener('click', loadHistory);
 
addWeatherBtn.addEventListener('click', (e) => {
    e.preventDefault();
 
    const weatherObject = {
        location: locationFormField.value,
        date: dateFormField.value,
        temperature: temperatureFormField.value
    };
 
    fetch(baseUrl, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(weatherObject)
    })
        .then(loadHistory)
        .then(clearInputFields);
});
 
editWeatherBtn.addEventListener('click', (e) => {
    const editedRecord = {
        location: locationFormField.value,
        date: dateFormField.value,
        temperature: temperatureFormField.value,
        _id: formAction.id        
    };
 
    fetch(`${baseUrl}${formAction.id}`, {
        method: 'PUT',
        headers: {
            'Content-Type': 'applicaton/json'
        },
        body: JSON.stringify(editedRecord)
    })
        .then(clearInputFields)
        .then(loadHistory);
 
    formAction.removeAttribute('id');
    editWeatherBtn.setAttribute('disabled', 'disabled');
    addWeatherBtn.removeAttribute('disabled');
});
 
function loadHistory() {
    listContainer.innerHTML = '';
 
    fetch(baseUrl)
        .then(res => res.json())
        .then(result => {
            renderRecords(Object.values(result));
        });
};
 
function renderRecords(records) {
 
    for (const record of records) {
        const divContainer = document.createElement('div');
        divContainer.className = 'container';
 
        const h2Location = document.createElement('h2');
        h2Location.textContent = record.location;
 
        const h3Date = document.createElement('h3');
        h3Date.textContent = record.date;
 
        const h3Degrees = document.createElement('h3');
        h3Degrees.id = 'celsius';
        h3Degrees.textContent = record.temperature;
 
        divContainer.appendChild(h2Location);
        divContainer.appendChild(h3Date);
        divContainer.appendChild(h3Degrees);
 
        const btnContainer = document.createElement('div');
        btnContainer.id = 'buttons-container';
 
        const changeBtn = document.createElement('button');
        changeBtn.className = 'change-btn';
        changeBtn.textContent = 'Change';
 
        const delBtn = document.createElement('button');
        delBtn.className = 'delete-btn';
        delBtn.textContent = 'Delete';
 
        btnContainer.appendChild(changeBtn);
        btnContainer.appendChild(delBtn);
 
        divContainer.appendChild(btnContainer);
        
        listContainer.appendChild(divContainer);
 
        changeBtn.addEventListener('click', () => {
            editWeatherBtn.removeAttribute('disabled');
            addWeatherBtn.setAttribute('disabled', 'disabled');
 
            locationFormField.value = h2Location.textContent;
            dateFormField.value = h3Date.textContent;
            temperatureFormField.value = h3Degrees.textContent;
            const currentId = record._id;
            formAction.id = currentId;
 
            divContainer.remove();
        });
 
        delBtn.addEventListener('click', (e) => {
 
            fetch(`${baseUrl}${record._id}`, {
                method: 'DELETE'
            })
                .then(loadHistory);
        });
    }
};
 
function clearInputFields() {
    locationFormField.value = '';
    temperatureFormField.value = '';
    dateFormField.value = '';
};