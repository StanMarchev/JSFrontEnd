function solve() {
  const [generateArea, buyArea] = Array.from(document.getElementsByTagName('textarea'));
  const [generateBtn, buyBtn] = Array.from(document.getElementsByTagName('button'));
  const tbody = document.querySelector('table > tbody');

  generateBtn.addEventListener('click', generateHandler);
  buyBtn.addEventListener('click', buyHandler);


  function generateHandler() {
      const data = JSON.parse(generateArea.value);
      for (const {img, name, price, decFactor} of data) {
          const tableRow = createElement('tr', '', tbody);

          const imgCol = createElement('td', '', tableRow);
          createElement('img', '', imgCol, '', '', {src: img});

          const nameCol = createElement('td', '', tableRow);
          createElement('p', name, nameCol);

          const priceCol = createElement('td', '', tableRow);
          createElement('p', price, priceCol);

          const decFactorCol = createElement('td', '', tableRow);
          createElement('p', decFactor, decFactorCol);

          const checkBoxCol = createElement('td', '', tableRow);
          createElement('input', '', checkBoxCol, '', '', {type: 'checkbox'});
      }
  }

  function buyHandler() {
      const checked = Array.from(document.querySelectorAll('tbody tr input:checked'));
      let boughtItems = []
      let totalPrice = 0
      let totalDecFactor = 0

      for (const input of checked) {
          const tableRow = input.parentElement.parentElement
          const [_firstCol, secondCol, thirdCol, fourthCol] = Array.from(tableRow.children)
          let item = secondCol.children[0].textContent;
          boughtItems.push(item)

          let currentPrice = Number(thirdCol.children[0].textContent);
          totalPrice += currentPrice

          let currentDecFactor = Number(fourthCol.children[0].textContent);
          totalDecFactor += currentDecFactor
      }

      buyArea.value += `Bought furniture: ${boughtItems.join(', ')}\n`
      buyArea.value += `Total price: ${totalPrice.toFixed(2)}\n`
      buyArea.value += `Average decoration factor: ${totalDecFactor / boughtItems.length}`
  }


  function createElement(type, content, parentNode, id, classes, attrs) {
      const htmlElement = document.createElement(type);

      if (content && type !== 'input') {
          htmlElement.textContent = content;
      }

      if (content && type === 'input') {
          htmlElement.value = content;
      }

      if (id) {
          htmlElement.id = id;
      }

      if (classes) {
          htmlElement.classList.add(...classes);
      }

      if (parentNode) {
          parentNode.appendChild(htmlElement);
      }

      if (attrs) {
          for (const key in attrs) {
              htmlElement.setAttribute(key, attrs[key]);
          }
      }

      return htmlElement;

  }
}