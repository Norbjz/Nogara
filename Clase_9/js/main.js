var allUsers = [];

function clearInput(input) {
  input.value = '';
}

function getDataInput(input) {
  return input.value;
}

function add() {
  var newUser = [];
  var inputs = document.getElementsByTagName('input');

  for (let index = 0; index < inputs.length; index++) {
    newUser.push(getDataInput(inputs[index]));
    clearInput(inputs[index]);
  }

  return newUser;
}

function saveAll() {
  allUsers.push(add());
  console.log(allUsers);
}
