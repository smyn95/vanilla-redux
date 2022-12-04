import { legacy_createStore } from 'redux';

const form = document.querySelector('form');
const input = document.querySelector('input');
const ul = document.querySelector('ul');

const ADD_TODO = 'ADD_TODO';
const DELETE_TODO = 'DELETE_TODO';

const reducer = (state = [], action) => {
  switch (action.type) {
    case ADD_TODO:
      return [...state, { text: action.text }];
    case DELETE_TODO:
      return;
    default:
      return state;
  }
};

const store = legacy_createStore(reducer);
store.subscribe(() => console.log(store.getState()));

const onSubmit = (e) => {
  e.preventDefault();
  const toDo = input.value;
  input.value = '';
  if (toDo === '') {
    alert('입력하세요.');
  } else {
    store.dispatch({ type: ADD_TODO, text: toDo });
  }
};

form.addEventListener('submit', onSubmit);

// 공식문서에서는 reducer 안에서 Date.now()를 쓰지 않길 권장하고 있습니다.
// action에서 Date.now()를 쓰고, reducer는 넘어온 값을 받아쓰기만 하면 될 것 같습니다.
