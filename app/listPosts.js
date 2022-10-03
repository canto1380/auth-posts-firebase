/***** GET POSTS *****/
const listPosts = document.querySelector("#posts");


export const setupPosts = (data) => {
  if (data.length) {
    let html = "";
    data.forEach((doc) => {
      const posts = doc.data();
      const li = `
      <div class='col-5 border border-2 rounded mx-1'>
       <h5>${posts.title}</h5>
       <p>${posts.description}</p>
      </div>
      `;
      html += li;
    });
    listPosts.innerHTML = html;
  } else {
    listPosts.innerHTML =
      '<h1 class="text-center mt-4">Logueate para ver las publicaciones</h1>';
  }
};
