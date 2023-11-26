function solve() {
   document.querySelector('#searchBtn').addEventListener('click', onClick);
   const searchedField = document.getElementById('searchField');

   function onClick() {
       const searchedWord = searchedField.value;
       const tableRows = Array.from(document.querySelectorAll('tbody > tr'));

       for (const row of tableRows) {
           let rowContent = row.textContent.trim()

           if (row.classList.contains('select')){
               row.classList.remove('select')
           }

           if (rowContent.includes(searchedWord)){
               row.classList.add('select')
           }
       }

       searchedField.value = ''
   }
}