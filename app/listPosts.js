/***** GET POSTS *****/
const listPosts = document.querySelector('#posts')

export const setupPosts = (data) => {
    if(data.length) {
        let html = ''
    data.forEach((doc) =>{
      const posts = doc.data()
      const li =`
      <li class='list-group-item list-group-item-action'>
       <h5>${posts.title}</h5>
       <p>${posts.description}</p>
      </li>
      `
      html+= li;
    })
    listPosts.innerHTML = html
  } else {
    listPosts.innerHTML = '<h1 class="text-center">Logueate para ver las publicaciones</h1>'
  }
}