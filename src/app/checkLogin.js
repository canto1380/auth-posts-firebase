/*** VERIFICAR SI ESTAMOS AUTH PARA MOSTRART NAV ***/
const loginIn = document.querySelectorAll('.logged-in')
const loginOut = document.querySelectorAll('.logged-out')
const titlePosts = document.querySelectorAll(".publications-title");
export const loginCheck = user => {
  if(user) {
   loginIn.forEach(link => link.style.display = 'block')
   loginOut.forEach(link => link.style.display = 'none')
   titlePosts.forEach(link => link.style.display = 'block')
  } else {
    loginOut.forEach(link => link.style.display = 'block')
    loginIn.forEach(link => link.style.display = 'none')
    titlePosts.forEach(link => link.style.display = 'none')
  }
}

const formAdd = document.querySelector('#add-form');
const btnAdd = document.querySelector('#btn-add')

export const formAddCheck = () => {
  btnAdd.addEventListener('click', e => {
    if(btnAdd.textContent === 'Agregar') {
      btnAdd.textContent = 'Ocultar'
      formAdd.style.display = 'flex'
    } else {
      btnAdd.textContent = 'Agregar'
      formAdd.style.display= 'none'
    }
  })
}
