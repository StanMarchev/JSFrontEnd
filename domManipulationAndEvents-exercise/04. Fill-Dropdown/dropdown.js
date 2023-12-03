function addItem() {
    const newItem = document.getElementById('newItemText')
    const newValue = document.getElementById('newItemValue')
    const select = document.getElementById('menu')

    console.log(select);

    const newItemValue = newItem.value
    const newValueValue = newValue.value
    const option = document.createElement('option')
    option.textContent = newItemValue
    option.value = newValueValue
    select.appendChild(option)

    newItem.value = ''
    newValue.value = ''
}