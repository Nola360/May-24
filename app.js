const input_field = document.querySelector('input');
// const message

const mailformat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;

input_field.addEventListener('keyup', function () {
  if (input_field.value.match(mailformat)) {
    console.log('match');
  } else {
    // alert('Please enter valid email');
  }

})