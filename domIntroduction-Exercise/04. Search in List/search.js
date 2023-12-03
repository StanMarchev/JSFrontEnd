function search() {
   const townsList = Array.from(document.querySelectorAll("#towns li"));
   const textToSearch = document.querySelector("#searchText").value;
   const result = document.querySelector("#result");

   townsList.forEach(town => {
      town.style.textDecoration = "none";
      town.style.fontWeight = "normal";
   });

   let matches = 0;
   townsList.forEach((town, index) => {
      const element = townsList[index].textContent;
      if (element.includes(textToSearch)) {
         town.style.textDecoration = "underline";
         town.style.fontWeight = "bold";
         matches++;
      }
   });
  
   result.textContent = `${matches} matches found`;
}