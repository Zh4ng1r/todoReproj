// const inputBox = document.getElementById("input-box");
// const listContainer = document.getElementById("listContainer");
// const buttonAdd = document.getElementById("addBtn")
// let todoList = [];

// buttonAdd.addEventListener('click', createCustomElement);

// function createTodoElement(id, text, status) {
//   let liElement = document.createElement('li');
//   let labelElement = document.createElement('label');
//   let inputElement = document.createElement('input');
//   let spanElement = document.createElement('span');
//   let buttonElement = document.createElement('button');

//   spanElement.innerText = text;

//   labelElement.appendChild(inputElement);
//   liElement.appendChild(labelElement);
//   liElement.appendChild(spanElement);
//   liElement.appendChild(buttonElement);

//   inputElement.setAttribute('type', 'checkbox');
//   inputElement.addEventListener('change', updateCheckedStatus);
//   liElement.classList.add('custom-checkbox');
//   spanElement.classList.add('content');
//   buttonElement.addEventListener('click', deleteLi);
//   buttonElement.classList.add('closeBtn');

//   liElement.setAttribute('data-id', id);
//   inputElement.checked = status;

//   if (status) {
//     spanElement.style.color = '#555';
//     spanElement.style.textDecoration = 'line-through';
//   }

//   return liElement;
// }

// function createCustomElement() {
//   if (inputBox.value === '') {
//     alert('404');
//   } else {
//     let createID = Date.now();
//     let liElement = createTodoElement(createID, inputBox.value, false);

//     listContainer.appendChild(liElement);

//     todoList.push({ id: createID, text: inputBox.value, status: false });
//     saveInformation();
//   }
// }

// function saveInformation() {
//     let todoListStringify = JSON.stringify(todoList);
//     localStorage.setItem('toDoList', todoListStringify);
// }

// function updateCheckedStatus(event) {
//     let checkbox = event.target;
//     let liElement = checkbox.parentNode.parentNode;
//     let spanElement = liElement.querySelector('.content');
//     let itemID = Number(liElement.getAttribute('data-id'));
  
//     let index = todoList.findIndex(item => item.id === itemID);
//     todoList[index].status = checkbox.checked;
  
//     if (checkbox.checked) {
//       spanElement.style.color = '#555';
//       spanElement.style.textDecoration = 'line-through';
//     } else {
//       spanElement.style.color = '';
//       spanElement.style.textDecoration = '';
//     }
  
//     saveInformation();
// }

// function deleteLi(event) {
//     let closeButton = event.target;
//     let liElement = closeButton.parentNode;

//     liElement.remove();

//     let index = todoList.findIndex(item => item.id == liElement.dataset.id);
    
//     if (index !== -1) {
//       todoList.splice(index, 1);

//       saveInformation();
//     }
// }


// function loadInformation() {
//     todoList = localStorage.getItem('toDoList') || '[]';
  
//     if (todoList) {
//         todoList = JSON.parse(todoList);
  
//       listContainer.innerHTML = '';
  
//       for (let i = 0; i < todoList.length; i++) {
//         let { id, text, status } = todoList[i];

//         let liElement = createTodoElement(id, text, status);
//         listContainer.appendChild(liElement);
//       }
//     }
// }
  
// loadInformation();

class Todo {
  constructor(id) {
    this.inputBox[id] = elem.getElementById('input-box');
    this.listContainer = document.getElementById('listContainer');
    this.buttonAdd = document.getElementById('addBtn');
    this.todoList = [];
    
    this.buttonAdd.addEventListener('click', this.createCustomElement.bind(this));
    this.loadInformation();
  }
  
  createTodoElement(id, text, status) {
    let liElement = document.createElement('li');
    let labelElement = document.createElement('label');
    let inputElement = document.createElement('input');
    let spanElement = document.createElement('span');
    let buttonElement = document.createElement('button');

    spanElement.innerText = text;

    labelElement.appendChild(inputElement);
    liElement.appendChild(labelElement);
    liElement.appendChild(spanElement);
    liElement.appendChild(buttonElement);

    inputElement.setAttribute('type', 'checkbox');
    inputElement.addEventListener('change', this.updateCheckedStatus.bind(this));
    liElement.classList.add('custom-checkbox');
    spanElement.classList.add('content');
    buttonElement.addEventListener('click', this.deleteLi.bind(this));
    buttonElement.classList.add('closeBtn');

    liElement.setAttribute('data-id', id);
    inputElement.checked = status;

    if (status) {
      spanElement.style.color = '#555';
      spanElement.style.textDecoration = 'line-through';
    }

    return liElement;
  }

  createCustomElement() {
    if (this.inputBox.value === '') {
      alert('404');
    } else {
      let createID = Date.now();
      let liElement = this.createTodoElement(createID, this.inputBox.value, false);

      this.listContainer.appendChild(liElement);

      this.todoList.push({ id: createID, text: this.inputBox.value, status: false });
      this.saveInformation();
    }
  }

  saveInformation() {
    let todoListStringify = JSON.stringify(this.todoList);
    localStorage.setItem('toDoList', todoListStringify);
  }

  updateCheckedStatus(event) {
    let checkbox = event.target;
    let liElement = checkbox.parentNode.parentNode;
    let spanElement = liElement.querySelector('.content');
    let itemID = Number(liElement.getAttribute('data-id'));

    let index = this.todoList.findIndex(item => item.id === itemID);
    this.todoList[index].status = checkbox.checked;

    if (checkbox.checked) {
      spanElement.style.color = '#555';
      spanElement.style.textDecoration = 'line-through';
    } else {
      spanElement.style.color = '';
      spanElement.style.textDecoration = '';
    }

    this.saveInformation();
  }

  deleteLi(event) {
    let closeButton = event.target;
    let liElement = closeButton.parentNode;

    liElement.remove();

    let index = this.todoList.findIndex(item => item.id == liElement.dataset.id);

    if (index !== -1) {
      this.todoList.splice(index, 1);

      this.saveInformation();
    }
  }

  loadInformation() {
    let storedTodoList = localStorage.getItem('toDoList') || '[]';
    this.todoList = JSON.parse(storedTodoList);

    if (this.todoList) {
      this.listContainer.innerHTML = '';

      for (let i = 0; i < this.todoList.length; i++) {
        let { id, text, status } = this.todoList[i];

        let liElement = this.createTodoElement(id, text, status);
        this.listContainer.appendChild(liElement);
      }
    }
  }
}

const todoApp = new Todo();

const todoApp2 = new todoApp(2);
