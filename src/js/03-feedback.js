import throttle from 'lodash.throttle';

const formEl = document.querySelector('.feedback-form');
const FEEDBACK_KAY = "feedback-form-state";
const feedbackData = {};

const emailInputEl = document.querySelector('input[type="email"]');
const messageInputEl = document.querySelector('textarea[name="message"]');
const submitBtn = document.querySelector('button[type="submit"]');
submitBtn.setAttribute("disabled", ``)

formEl.addEventListener('input', throttle(setInputData, 500));
formEl.addEventListener('submit', removeInputData);


function activeButton() {
    if (emailInputEl.value !== '' && messageInputEl.value !== '') {
        submitBtn.removeAttribute("disabled");
    }
};


function setInputData(e) {
    e.preventDefault()
    feedbackData[e.target.name] = e.target.value;
    localStorage.setItem('FEEDBACK_KAY', JSON.stringify(feedbackData));
    activeButton();
};


function removeInputData(e) {
    e.preventDefault()
    console.log(feedbackData);
    localStorage.removeItem(FEEDBACK_KAY);
    e.target.reset();
    submitBtn.setAttribute("disabled",``);
};

