let btn = document.querySelector('.button')
let spinIcon = document.querySelector('.spinner')
let btnText = document.querySelector('.btn-text')

let check = function(){
  btn.style.cursor = "wait"
  btn.classList.add('checked');
  spinIcon.classList.add('spin')
  btnText.textContent = "loading"

  setTimeout(() => {
    btn.style.cursor = "not-allowed"
    spinIcon.classList.replace('spinner', 'check')
    spinIcon.classList.replace('fa-fan', 'fa-check')
    btnText.textContent = "Done"
    btn.setAttribute('disabled', '')
    btn.removeEventListener("click", check) //to prevent the button clicking after the checked class is added
  }, 4000);

}
btn.addEventListener("click", check)