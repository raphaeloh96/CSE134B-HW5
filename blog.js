const posts = [];
const post = {title: "", date: "", summary: ""};
let i=0;

export function addPost(){
  document.getElementById("promptForm").style.visibility="visible";
  i++;
}
export function submitPost(event){
  event.preventDefault();
  
  post.title = document.getElementById("title").value;
  post.date = document.getElementById("date").value;
  post.summary = document.getElementById("summary").value;
  posts.push(post);
  const ul = document.createElement("ul");
  ul.setAttribute("id", "list");
  localStorage.setItem(i, JSON.stringify(post));
  const v = localStorage.getItem(i); 
  const p = JSON.parse(v);
  const postList = document.createElement("li");
  postList.innerHTML = `Title: ${p.title}, Date: ${p.date}, Summary: ${p.summary}`;
  postList.setAttribute("id", i);
  const deleteBtn = document.createElement("button");
  deleteBtn.setAttribute("id", i);
  deleteBtn.innerText = `Delete`;
  postList.appendChild(deleteBtn);
  if(deleteBtn){
    deleteBtn.addEventListener("click", deletePost);
  }
  const editBtn = document.createElement("button");
  editBtn.setAttribute("id", i);
  editBtn.innerText = `Edit`;
  postList.appendChild(editBtn);
  if(editBtn){
    editBtn.addEventListener("click", editPost);
  }
  ul.appendChild(postList);
  document.body.appendChild(ul);
  document.getElementById("title").value = '';
  document.getElementById("date").value = '';
  document.getElementById("summary").value = '';
  document.getElementById("promptForm").style.visibility="hidden";
}

export function deletePost(event){
  event.preventDefault();
  const d = event.target.getAttribute("id");
  localStorage.removeItem(d);
  const p = document.getElementById(d);
  const ul = document.getElementById("list");
  if(ul){
    ul.removeChild(p);
  }
  
}

export function editPost(event){
  event.preventDefault();
  const eId = event.target.getAttribute("id");
  document.getElementById("promptForm").style.visibility="visible";
  const v = localStorage.getItem(eId);
  const p = JSON.parse(v);
  const dp = document.getElementById(eId);
  const ul = document.getElementById("list");
  if(ul){
    ul.removeChild(dp);
  }
  p.title = document.getElementById("title").value;
  p.date = document.getElementById("date").value;
  p.summary = document.getElementById("summary").value;
  localStorage.setItem(eId, JSON.stringify(p));
}