import throttle from 'lodash.throttle';

const formEl = document.querySelector('.feedback-form');
const FEEDBACK_KAY = "feedback-form-state";

const feedbackData = {};

const emailInputEl = document.querySelector('.feedback-form input');
const messageInputEl = document.querySelector('.feedback-form textarea');


formEl.addEventListener('input', throttle(e => {
    feedbackData[e.target.name] = e.target.value;
    localStorage.setItem(FEEDBACK_KAY, JSON.stringify(feedbackData));
  }, 500)
);


formEl.addEventListener('submit', e => {
    e.preventDefault();
    if (emailInputEl.value !== '' && messageInputEl.value !== '') {
        console.log(feedbackData);
        localStorage.removeItem(FEEDBACK_KAY);
        e.currentTarget.reset();
        return;
    }
    alert('All fields');
});

function fillForm () {
    const savedEl = localStorage.getItem(FEEDBACK_KAY);
    if (savedEl) {
        feedbackData = JSON.parse(savedEl);
        emailInputEl.value = feedbackData.email || '';
        messageInputEl.value = feedbackData.message || '';
    }
};


// formEl.addEventListener('input', throttle(setInputData, 500));
// formEl.addEventListener('submit', removeInputData);


// const dataLocalStorage = localStorage.getItem(FEEDBACK_KAY);
// const parseDataLocalStorage = JSON.parse(dataLocalStorage);





// const submitBtn = document.querySelector('button[type="submit"]');
// submitBtn.setAttribute("disabled", ``);

// function activeButton() {
//     if (emailInputEl.value !== '' && messageInputEl.value !== '') {
//         submitBtn.removeAttribute("disabled");
//         localStorage.removeItem(FEEDBACK_KAY);
        
//     }
// };

// function setInputData(e) {
//     e.preventDefault()
//     feedbackData[e.target.name] = e.target.value;
//     localStorage.setItem('FEEDBACK_KAY', JSON.stringify(feedbackData));
//     activeButton();
// };

// function removeInputData(e) {
//     e.preventDefault()
//     console.log(feedbackData);
//     localStorage.removeItem(FEEDBACK_KAY);
//     e.target.reset();
//     submitBtn.setAttribute("disabled",``);
// };

