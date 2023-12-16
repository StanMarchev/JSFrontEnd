window.addEventListener("load", solve);

function solve() {
    let expensesTypeInput = document.getElementById('expense');
    let amount = document.getElementById('amount');
    let date = document.getElementById('date');
    let addBtn = document.getElementById('add-btn');

    let deleteBtn = document.querySelector('.delete');

    let formElement = document.querySelector('form');

    addBtn.addEventListener('click', add);

    function add(){
        let isValidInput = expensesTypeInput.value === '' || amount.value === '' || date.value === '';

        if (isValidInput){
            return;
        }

        let previewList = document.getElementById('preview-list');
        let publishExpenses = document.getElementById('expenses-list');

        let li = document.createElement('li');
        li.classList.add('expense-item');

        let articleElement = document.createElement('article');

        let typeParagraph = document.createElement('p');
        typeParagraph.textContent = `Type: ${expensesTypeInput.value}`;

        let typeVal = expensesTypeInput.value;

        let amountParagraph = document.createElement('p');
        amountParagraph.textContent = `Amount: ${amount.value}$`;

        let amountVal = amount.value;

        let dateParagraph = document.createElement('p');
        dateParagraph.textContent = `Date: ${date.value}`;

        let dateVal = date.value;

        articleElement.appendChild(typeParagraph);
        articleElement.appendChild(amountParagraph);
        articleElement.appendChild(dateParagraph);

        let editBtn = document.createElement('button');
        editBtn.classList.add('btn');
        editBtn.classList.add('edit');
        editBtn.textContent = 'edit';
        editBtn.addEventListener('click', edit);

        let postBtn = document.createElement('button');
        postBtn.classList.add('btn');
        postBtn.classList.add('ok');
        postBtn.textContent = 'ok';
        postBtn.addEventListener('click', post);

        li.appendChild(articleElement);
        li.appendChild(editBtn);
        li.appendChild(postBtn);

        previewList.appendChild(li);

        addBtn.disabled = true;
        formElement.reset();

        function edit (){

        expensesTypeInput.value = typeVal;
        amount.value = amountVal;
        date.value = dateVal;

        previewList.removeChild(li);

        addBtn.disabled = false;
        
    }

    function post(){

        previewList.removeChild(li);
        li.removeChild(postBtn);
        li.removeChild(editBtn);
        publishExpenses.appendChild(li);
        addBtn.disabled = false;

        deleteBtn.addEventListener('click', ()=> {
            location.reload()
        })
    }


    }
}