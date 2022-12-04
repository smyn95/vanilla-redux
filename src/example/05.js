import { legacy_createStore } from 'redux';

const add = document.getElementById('add');
const minus = document.getElementById('minus');
const number = document.querySelector('span');

const countModifier = (count = 0, action) => {
  switch (action.type) {
    case 'ADD':
      return count + 1;
    case 'MINUS':
      if (count === 0) return count;
      return count - 1;
    default:
      return count;
  }
};

const countStore = legacy_createStore(countModifier);

const onChange = () => {
  number.innerText = countStore.getState();
};
countStore.subscribe(onChange);

const handleAdd = () => {
  countStore.dispatch({ type: 'ADD' });
};

const handleMinus = () => {
  countStore.dispatch({ type: 'MINUS' });
};

add.addEventListener('click', handleAdd);
minus.addEventListener('click', handleMinus);

// string으로 작성하게 되면 스펠링을 잘못 적었을때 에러가 어디에서 났는지 알려주지 않음으로 const ADD = "ADD"라고 적어준다.
