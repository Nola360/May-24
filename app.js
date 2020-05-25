const input_field = document.querySelector('input');
const mailformat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;

const input_border = document.querySelector('.email_icon_field');
const error_icon = document.querySelector('.email_icon_field .fas.fa-exclamation-circle');
const message = document.querySelector('.message_container');
const check_icon = document.querySelector('.email_icon_field .fas.fa-check');

console.log(input_border);
console.log(error_icon);
console.log(message);



// Input field validation animation
input_field.addEventListener('keyup', function () {
  let accent = document.querySelector('.accent');
  let valid_message = document.querySelector('.message_container p:nth-child(3)');
  let inValid_message = document.querySelector('.message_container p:nth-child(2)');
  if (input_field.value.match(mailformat)) {
    input_border.classList.add('valid');
    error_icon.classList.remove('active');
    check_icon.classList.add('active');
    message.classList.add('valid');
    message.classList.remove('active');
    accent.classList.add('valid');
    valid_message.classList.add('valid');
    inValid_message.classList.add('invalid');
  } else {
    input_border.classList.remove('valid');
    input_border.classList.add('active');
    error_icon.classList.add('active');
    check_icon.classList.remove('active');
    message.classList.add('active');
    message.classList.remove('valid');
    accent.classList.remove('valid');
    inValid_message.classList.remove('invalid');
    valid_message.classList.remove('valid');
    // return false;
  }

  if (input_field.value === '') {
    error_icon.classList.remove('active');
    error_icon.classList.remove('active');
    message.classList.remove('active');
    input_border.classList.remove('active');
  }


})

