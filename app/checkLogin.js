/*** VERIFICAR SI ESTAMOS AUTH PARA MOSTRART NAV ***/
const loginIn = document.querySelectorAll('.logged-in')
const loginOut = document.querySelectorAll('.logged-out')
const titlePosts = document.querySelector("#publications-title");
export const loginCheck = user => {
  if(user) {
   loginIn.forEach(link => link.style.display = 'block')
   loginOut.forEach(link => link.style.display = 'none')
   titlePosts.style.display = 'block'
  } else {
    loginOut.forEach(link => link.style.display = 'block')
    loginIn.forEach(link => link.style.display = 'none')
    titlePosts.style.display = 'none'
  }
}
