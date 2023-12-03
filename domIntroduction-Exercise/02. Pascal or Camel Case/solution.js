function solve() {
  const inputText = Array.from(document.querySelector("#text").value.split(" "));
  const inputConvention = document.querySelector("#naming-convention").value;
  const result = document.querySelector("#result");

  if (inputConvention === "Camel Case" || inputConvention === "Pascal Case") {
    const transformedText = inputText.reduce((acc, word, index) => {
      const element = word.toLowerCase();
      const formattedWord = index > 0 ? element.charAt(0).toUpperCase() + element.slice(1) : element;
      return acc + formattedWord;
    }, "");

    result.textContent = inputConvention === "Camel Case" ? transformedText : transformedText.charAt(0).toUpperCase() + transformedText.slice(1);
  } else {
    result.textContent = "Error!";
  }

}