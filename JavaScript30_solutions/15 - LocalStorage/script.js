  const addItems = document.querySelector('.add-items');
  const itemsList = document.querySelector('.plates');
  const buttons = addItems.querySelectorAll("button");
  var items = JSON.parse(localStorage.getItem('items')) || [];

  function addItem(e) {
      e.preventDefault();
      const text = (this.querySelector('[name=item]')).value;
      const item = {
          text,
          done: false
      };

      items.push(item);
      localStorage.setItem("items", JSON.stringify(items));
      populateList(items, itemsList);
      this.reset();
  }

  function populateList(elements = [], elementsList) {
      elementsList.innerHTML = elements.map((el, i) => {
          return `
      <li>
        <input type="checkbox" data-index=${i} id="item${i}" ${el.done ? 'checked' : ''} />
        <label for="item${i}">${el.text}</label>
      </li>
      `
      }).join("");
  }

  function toggleDone(e) {
      if (!e.target.matches("input")) return; //skip this unless it is an input
      const el = e.target;
      const index = el.dataset.index;
      items[index].done = !items[index].done;
      localStorage.setItem("items", JSON.stringify(items));
      populateList(items, itemsList);
  }

  function triggerAction(e) {
      e.preventDefault();
      switch (e.target.name) {
          case "check-all":
              items.forEach(item => item.done = true);
              break;
          case "uncheck-all":
              items.forEach(item => item.done = false);
              break;
          case "clear-all":
              debugger;
              items = [];
              break;
      }
      localStorage.setItem("items", JSON.stringify(items));
      populateList(items, itemsList);
  };

  addItems.addEventListener('submit', addItem);
  buttons.forEach(button => button.addEventListener("click", triggerAction));
  itemsList.addEventListener('click', toggleDone);
  populateList(items, itemsList);