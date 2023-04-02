import throttle from 'lodash.throttle';

const formEl = document.querySelector('.feedback-form');
const FEEDBACK_KAY = "feedback-form-state";

let feedbackData = {};

const emailInputEl = document.querySelector('.feedback-form input');
const messageInputEl = document.querySelector('.feedback-form textarea');


formEl.addEventListener('input', throttle(e => {
    e.preventDefault()
    feedbackData[e.target.name] = e.target.value;
    localStorage.setItem(FEEDBACK_KAY, JSON.stringify(feedbackData));
  }, 500)
);

const dataFromLocalStorage = localStorage.getItem(FEEDBACK_KAY);
const parseDataFromLocalStorage = JSON.parse(dataFromLocalStorage);

if(parseDataFromLocalStorage) {
    emailInputEl.value = parseDataFromLocalStorage[emailInputEl.name];
    messageInputEl.value = parseDataFromLocalStorage[messageInputEl.name];
}

formEl.addEventListener('submit', e => {
    e.preventDefault();
    if (emailInputEl.value !== '' && messageInputEl.value !== '') {
        console.log(feedbackData);
        localStorage.removeItem(FEEDBACK_KAY);
        e.target.reset();
        feedbackData = {};
        return;
    }
    alert('All fields');
});