const input = document.querySelector('input');
const clearButton = document.getElementById('cancel')

function validatePass(){
    if(document.getElementById('password').value == 'stellar'){
        alert('slaeeee');
        return true;
    }else{
        alert('wrong password!!');
        return false;
    }
}

clearButton.addEventListener('click', () => {
    input.value = ''; // empty input
    input.focus(); // re-focus on input
  })