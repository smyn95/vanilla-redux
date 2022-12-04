import { legacy_createStore } from 'redux';

const form = document.querySelector('form');
const input = document.querySelector('input');
const ul = document.querySelector('ul');

const ADD_TODO = 'ADD_TODO';
const DELETE_TODO = 'DELETE_TODO';

const reducer = (state = [], action) => {
  switch (action.type) {
    case ADD_TODO:
      return [];
    case DELETE_TODO:
      return;
    default:
      return state;
  }
};

const store = legacy_createStore(reducer);

const createToDo = (toDo) => {
  const li = document.createElement('li');
  li.innerText = toDo;
  ul.appendChild(li);
};

const onSubmit = (e) => {
  e.preventDefault();
  const toDo = input.value;
  input.value = '';
  if (toDo === '') {
    alert('입력하세요.');
  } else {
    createToDo(toDo);
  }
};

form.addEventListener('submit', onSubmit);

// 절대 MUTATE_STATE를 쓰지말것
