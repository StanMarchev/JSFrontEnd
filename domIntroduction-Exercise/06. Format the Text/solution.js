function solve() {
  const textField = document.getElementById('input');
  const button = document.getElementById('formatItBtn')
  const div = document.getElementById('output')

  button.addEventListener('click', formatHandler)


  function formatHandler() {
      const sentArray = textField.value.split('.').filter((el) => el !== '')

      while (sentArray.length > 0) {
          let firstThree = sentArray.splice(0, 3)
              .map((p) => p.trimStart())
          const newParagraph = document.createElement('p')
          newParagraph.textContent += firstThree.join('.') + '.'
          div.appendChild(newParagraph)
      }
  }
}