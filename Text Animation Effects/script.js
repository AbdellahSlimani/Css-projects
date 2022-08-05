const body = document.getElementsByTagName('BODY')[0]
const initialText = document.getElementById('initialText')
const inputScreen = document.getElementById('inputScreen')
const btn  = document.getElementsByTagName('button')
const goBackHint = document.getElementById('goBackHint')


const showCase = () => {
  const inputValue = document.querySelector('input').value;
  if(inputValue.length > 0) {
    initialText.remove()
    
    inputScreen.classList.add('hide')
    goBackHint.classList.add("show")
    body.innerHTML += `<h2 data-text="&nbsp;${inputValue}&nbsp;">&nbsp;${inputValue}&nbsp;</h2>`
  } else {
    alert('Please, fill the required field')
  }

}

document.addEventListener('keyup', function(e){
  if(e.keyCode == 13 && !goBackHint.classList.contains('show'))
    showCase();
})


document.addEventListener('keyup', function(e){
  if(e.keyCode == 8 && inputScreen.classList.contains('hide'))
    window.location.reload();
})  


