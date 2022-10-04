import { deletePosts, getTask, updateTask } from "./firebase.js";
import { showMessage } from "./showMessagez.js";
import { aa } from "./newPostsForm.js";

/***** GET POSTS *****/
const listPosts = document.querySelector("#posts");

export const setupPosts = (data) => {
  if (data.length) {
    let html = "";
    data.forEach((doc) => {
      const posts = doc.data();
      const li = `
      <div class='col-sm-12 col-lg-5 border border-2 rounded mx-1 my-3 h-100'>
       <h5>${posts.title}</h5>
       <p>${posts.description}</p>

       <div class='row justify-content-end'>
       <button class='btn btn-warning btn-edit col-2' data-id='${doc.id}' data-bs-toggle="modal" data-bs-target="#editPostModal">Edit</button>
       <button class='btn btn-danger btn-delete mx-3 col-2' data-id='${doc.id}'>Delete</button>
       </div>
      </div>
      `;
      html += li;
    });
    listPosts.innerHTML = html;

    const btnDelete = listPosts.querySelectorAll(".btn-delete");
    const btnEdit =  listPosts.querySelectorAll('.btn-edit')

    const titleEdit = document.querySelector('#title-edit')
    const descriptionEdit = document.querySelector('#description-edit')
    let id = ''

    btnDelete.forEach((btn) => {
      btn.addEventListener("click", (e) => {
        const id = e.target.dataset.id;
        deletePosts(id);
        showMessage("Task Deleted successfully")
        aa()
      });
    });

    btnEdit.forEach((btn) => {
      btn.addEventListener('click',async (e) => {
        id = e.target.dataset.id
        const doc = await getTask(id)
        const post = doc.data()
        titleEdit.value = post.title
        descriptionEdit.value = post.description
      })
    })

    const editPost = document.getElementById('edit-post-form')
    const modalEdit = document.getElementById('editPostModal')

    editPost.addEventListener('submit', (e) => {
      e.preventDefault()
      updateTask(id, {title: titleEdit.value, description: descriptionEdit.value})
      showMessage('Task Update successfully')
      aa()
      const modal = bootstrap.Modal.getInstance(modalEdit.closest('.modal'));
      // modal.hide()
    })

  } else {
    listPosts.innerHTML =
      '<h1 class="text-center mt-4">Logueate para ver las publicaciones</h1>';
  }
};
